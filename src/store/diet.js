import { defineStore } from "pinia"
import food from "../../public/food.json";

export const useDietStore = defineStore("dietStore", {

  state: () => ({
    food: food,
    keyword: '',
    items: [],
    selected: [],
    kcalChart: '',
    nutrientChart: '',
  }),


  getters: {
    getSelectedLength() {
      return this.selected.length;
    },

    getSearchResultLength() {
      return this.items.length;
    },

    getTotalSelectedKcal() {
      let temp = 0;

      for(let i = 0;i < this.selected.length; i++){
        temp += parseInt((this.selected[i].kcal /  this.selected[i].size) * parseInt(this.selected[i].quantity));
      }

      return temp;
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
            protein: item.protein,
            fat: item.fat,
            carbs: item.carbs,
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
        value.push((item.kcal / item.size) * item.quantity);
      }

      this.kcalChart = {

        labels: labels,
        datasets: [
          {
            label: "kcal",
            backgroundColor: colors,
            data: value
          }
        ]
      };

      const nuLabels = [];
      const nuColors = [];
      const nuValue = [0, 0, 0];

      nuLabels.push("단백질");
      nuLabels.push("탄수화물");  
      nuLabels.push("지방");

      nuColors.push(backgroundColor[4 % backgroundColor.length]);
      nuColors.push(backgroundColor[5 % backgroundColor.length]);
      nuColors.push(backgroundColor[6 % backgroundColor.length]);


      for (let i = 0; i < this.selected.length; i++) {
        let item = this.selected[i];
        
        nuValue[0] += item.protein === undefined ? 0 : parseFloat(item.protein);
        nuValue[1] += item.carbs === undefined ? 0 : parseFloat(item.carbs);
        nuValue[2] += item.fat === undefined ? 0 : parseFloat(item.fat);
      }

      this.nutrientChart = {
        labels: nuLabels,
        datasets: [
          {
            label: "g",
            backgroundColor: nuColors,
            data: nuValue
          }
        ]
      }

      console.log(nuValue);
      
    },
  }
});