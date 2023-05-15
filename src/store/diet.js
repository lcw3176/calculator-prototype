import { defineStore } from "pinia"
import food from "@/assets/food.json";

export const useDietStore = defineStore("dietStore", {

  state: () => ({
    food: food,
    keyword: '',
    items: [],
    selected: [],
    loadCount: 0,
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
        if (item.name.startsWith(this.keyword)) {
          this.addData(item);

          if (this.items.length >= 10) {
            this.loadCount++;
            break;
          }
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
      this.items.push({
        title: data.name,
        subtitle: data.size + 'g / ' + data.kcal + 'kcal',
        value: data.no,
      });
    },

  }
});