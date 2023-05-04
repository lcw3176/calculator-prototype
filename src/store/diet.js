import { defineStore } from "pinia"


export const useDietStore = defineStore("dietStore", {

    state: () => ({
      foods: [],
    }),
  
  
    getters: {
      getFoods() {
        return this.foods;
      },  
    },
  
    actions: {

      makeFood(){
        let food = {
          name: '',
          gram: '',
        }

        return food;
      },
      

      async addFood() {
        this.foods.push(this.makeFood());
        console.log(this.foods);
      },

    }
  });