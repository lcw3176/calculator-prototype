import { defineStore } from "pinia"
import food from "@/assets/food.json";

export const useDietStore = defineStore("dietStore", {

  state: () => ({
    food: food,
    keyword: '',
    items: [],
    selected: [],
  }),


  getters: {
    getSelectedLength() {
      return this.selected.length;
    }
  },

  actions: {

    async searchFood() {

      this.items.length = 0;
      for (let i = 0; i < this.food.length; i++) {
        if (this.food[i].식품명.includes(this.keyword)) {
          this.addData(this.food[i]);
        }
      }
    },

    async addFood(selectedFood) {
      if(this.selected.includes(selectedFood)){
        return;
      }
      
      this.selected.push(selectedFood);
    },

    async removeSelected(selectedFood){
      this.selected = this.selected.filter((element) => element !== selectedFood);
    },

    async addData(data) {
      this.items.push({
        title: data.식품명,
        subtitle: data.제공량 + 'g / ' + data.에너지 + 'kcal',
        value: data.식품명,
      });
    },

  }
});