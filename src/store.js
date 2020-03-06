import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalItemList: []
  },
  mutations: {
    modifyItem(state, item) {
      state.totalItemList = item;
    },
    emptyItem(state) {
      state.totalItemList = [];
    }
  },
  actions: {

  },
  getters: {
    getTotalPrice: (state, getters) => {
      let total = 0;
      state.totalItemList.forEach(function(element){
        total += element.price;
      })

      return total;
    },
    totalListFilter: (state, getters) => {
      var total_item_list = []
      let _self = state;

      // di sini olah data buat ditampilkan di bagian total
      state.totalItemList.forEach(function(element) {
        
        var single_element_index = -1;

        for (var i=0; i < total_item_list.length; i++) {
            if (total_item_list[i].id === element.id) {
              single_element_index = i;
              break;
            }
        }

        if(total_item_list[single_element_index]){
          total_item_list[single_element_index].count++;
        }else{
          var new_element = {
            'id': element.id,
            'name': element.name,
            'price': element.price,
            'count': 1,
            'object': element
          }; 
          total_item_list.push(new_element);
        }
      });
    
      return total_item_list;
    }
  }
})