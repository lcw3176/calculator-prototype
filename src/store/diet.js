import { defineStore } from "pinia"
import food from "@/assets/food.json";

export const useDietStore = defineStore("dietStore", {

    state: () => ({
      food: food,
      keyword: '',
      items: [],
    }),
  
  
    getters: {

    },
  
    actions: {

      async searchFood() {
        
        this.items.length = 0;
        for(let i = 0; i < this.food.length; i++){
          if(this.food[i].식품명.includes(this.keyword)){
            this.addData(this.food[i]);
          }
        }
      },

      async addFood(){

      },

      async addData(data){
        this.items.push({
          type: 'divider'
        });

        this.items.push({
          title:  data.식품명,
          subtitle:  data.제공량 + 'g / ' +  data.에너지 + 'kcal',
          value: data.식품명,
        });
      },

    }
  });