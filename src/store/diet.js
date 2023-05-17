import { defineStore } from "pinia"
import food from "@/assets/food.json";
import ingredient from "@/assets/ingredient.json";

export const useDietStore = defineStore("dietStore", {

  state: () => ({
    food: food,
    ingredient: ingredient,
    keyword: '',
    items: [],
    selected: [],
    loadCount: 0,
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

      this.items.length = 0;

      if (this.keyword === '') {
        return;
      }

      for (let item of this.food) {
        if(!this.addData(item)){
          break;
        }
      }

      for (let item of this.ingredient) {
        if(!this.addData(item)){
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
      let no = this.items[this.items.length - 1].value;
      let beforeSize = this.items.length;
      
      this.loadCount++;

      for (let i = no; i < this.food.length; i++) {
        if (this.food[i].name.startsWith(this.keyword)) {
          this.addData(this.food[i]);

          if (this.items.length >= this.loadCount * 10) {
            break;
          }
        }
      }

      let nowSize = this.items.length;

      if (beforeSize != nowSize) {
        $state.loaded();
      } else {
        $state.complete();
      }

    },

    addData(data) {
      if(data.kcal === ''){
        return;
      }

      if (data.name.startsWith(this.keyword)) {
        this.items.push({
          title: data.name,
          subtitle: data.size + 'g / ' + data.kcal + 'kcal',
          kcal: data.kcal,
          value: data.no,
          quantity: 1,
        });
      }

      if (this.items.length >= 10) {
        this.loadCount++;
        return false;
      }

      return true;
    },

    async refreshChart() {
      const labels = [];
      const backgroundColor = ['#41B883', '#E46651', '#00D8FF', '#DD1B16'];
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