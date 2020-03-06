<template>
  <div class="row">
    <div class="col">
      <router-link to="/checkout" class="btn btn-secondary btn-block font-weight-bold">CHECKOUT</router-link>
      <div class="row">
        <div class="col">
          <transition-group name="list">
            <div class="card margin-top-bottom" v-for="item in totalListItems" key="item.id">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item list-group-item-secondary">
                    <h5>{{item.name}}</h5></li>
                  <li class="list-group-item">

                    <div class="row row-cols-2">
                      <div class="col">Rp. {{item.price}} x {{item.count}}</div>
                      <div class="col text-right">Rp. {{item.price * item.count}}</div>
                    </div>
                    
                  </li>
                  <li class="list-group-item">
                    
                    <div class="btn-toolbar justify-content-between">
                      <div class="btn-group" role="group" aria-label="First group">
                        <button @click="removeAllItems(item.id)" type="button" class="btn btn-light">Remove</button>
                      </div>

                      <div class="btn-group" role="group" aria-label="First group">
                        <button @click="addItems(item.object)" type="button" class="btn btn-secondary">+</button>
                        <button @click="removeItem(item.id)" type="button" class="btn btn-secondary">-</button>
                      </div>
                      
                    </div>
                  </li>
              </ul>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>  
  
</template>

<script>
  // import axios from 'axios';

  export default {
    data () {
      return {
        // total_items_list: []
      }
    },
    props:{
      totalItems: Array
    },
    methods: {
      search_by_id: function (nameKey,myArray) {
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].id === nameKey) {
                return i;
            }
        }

        return -1
      },
      removeAllItems(id){
        let _self = this;

        for(var i = this.totalItems.length - 1; i >= 0; i--) {
            if(this.totalItems[i].id === id) {
                this.totalItems.splice(i, 1);
            }
        }
      },
      addItems(obj){
        // console.log(obj);
        this.totalItems.push(obj);
      },
      removeItem(id){
        let _self = this;

        for(var i = this.totalItems.length - 1; i >= 0; i--) {
            if(this.totalItems[i].id === id) {
                this.totalItems.splice(i, 1);
                return true;
            }
        }

        return false;
      },
    },
    computed: {
      totalListItems: function(){
        var total_item_list = []
        let _self = this;

        // di sini olah data buat ditampilkan di bagian total
        this.totalItems.forEach(function(element) {
          var single_element_index = _self.search_by_id(element.id,total_item_list);
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
  }
</script>

<style scoped>

</style>