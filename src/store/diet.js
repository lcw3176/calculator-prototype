import { defineStore } from "pinia"
import food from "@/assets/food.json";

export const useDietStore = defineStore("dietStore", {

  state: () => ({
    food: food,
    keyword: '',
    items: [],
    selected: [],
    chart: '',
  }),


  getters: {
    getSelectedLength() {
      return this.selected.length;
    },

    getSearchResultLength() {
      return this.items.length;
    },


  },

  actions: {

    async searchFood() {
      this.keyword = this.keyword.trim();
      this.items.length = 0;

      if (this.keyword === '') {
        return;
      }

      for (let item of this.food) {
        if(item.kcal === ''){
          continue;
        }
  
        if (item.name.includes(this.keyword)) {
          this.items.push({
            title: item.name,
            size: item.size,
            kcal: item.kcal,
            no: item.no,
            quantity: 1,
          });
        }
  
        if (this.items.length >= 10) {
          break;
        }
      }

    },


    async searchNextFood() {

      if (this.keyword === '') {
        return;
      }

      let beforeSize = this.items.length;

      for (let i = this.items[beforeSize - 1].no + 1; i < this.food.length; i++) {
        let item = this.food[i];

        if(item.kcal === ''){
          continue;
        }
  
        if (item.name.includes(this.keyword)) {
          this.items.push({
            title: item.name,
            size: item.size,
            kcal: item.kcal,
            no: item.no,
            quantity: 1,
          });
        }
  
        if (this.items.length >= beforeSize + 10) {
          break;
        }
      }

    },

    async selectFood(selectedFood) {
      if (this.selected.includes(selectedFood)) {
        return;
      }

      this.selected.push(selectedFood);
    },

    async removeSelected(selectedFood) {
      this.selected = this.selected.filter((element) => element !== selectedFood);
    },

    async infiniteHandler($state) {
      let beforeSize = this.items.length;
  
      await this.searchNextFood();

      let nowSize = this.items.length;
      
      if (beforeSize != nowSize) {
        $state.loaded();
      } 
    },


    async refreshChart() {
      const labels = [];
      const backgroundColor = ['#643843', '#99627A', '#C88EA7', '#E7CBCB', '#4C4C6D', '#1B9C85', '#E8F6EF', '#FFE194'];
      const colors = [];
      const value = [];

      for (let i = 0; i < this.selected.length; i++) {
        let item = this.selected[i];

        labels.push(item.title);
        colors.push(backgroundColor[i % backgroundColor.length]);
        value.push(item.kcal * item.quantity);
      }

      this.chart = {

        labels: labels,
        datasets: [
          {
            label: "칼로리",
            backgroundColor: colors,
            data: value
          }
        ]
      };
      
    },

    async addCount(item){

      for(let i = 0; i < this.selected.length; i++){

        if(this.selected[i] === item){
          this.selected[i].quantity++;
          break;
        }
      }

      this.refreshChart();
    },

    async minusCount(item){
      for(let i = 0; i < this.selected.length; i++){

        if(this.selected[i] === item){
          this.selected[i].quantity--;
          break;
        }
      }

      this.refreshChart();
    }

  }
});