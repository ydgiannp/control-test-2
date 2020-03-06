<template>
  <div class="container">
    <div class="row justify-content-md-center align-items-center h-100-vh">
        <div class="col col-lg-4">
          <div class="card margin-top-bottom" v-for="item in finalList">
            <ul class="list-group list-group-flush">
                  <li class="list-group-item list-group-item-secondary">
                    <h5>{{item.name}}</h5></li>
                  <li class="list-group-item">

                    <div class="row row-cols-2">
                      <div class="col">Rp. {{item.price}} x {{item.count}}</div>
                      <div class="col text-right">Rp. {{item.price * item.count}}</div>
                    </div>
                    
                  </li>
              </ul>
          </div>

          <div class="card">
            <div class="card-body">
                <div class="row row-cols-2">
                  <div class="col"><h5 class="card-title">Total</h5></div>
                  <div class="col text-right"><h5 class="card-text">Rp. {{ getTotal }}</h5></div>
                </div>
            </div>
            <div class="card-body">
              <div v-on:click="emptyCart()" class="btn btn-secondary btn-block text-white">Print Bill</div>
            </div>
          </div>

          <div class="text-center">
            <router-link to="/dashboard" class="btn">cancel</router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        checkoutItem: this.$store.state.totalItemList
      }
    },
    methods: {
      emptyCart(){
        console.log('nih');
        this.$store.commit('emptyItem');
        this.$router.push('/dashboard');
      }
    },
    computed: {
      finalList: function(){
        return this.$store.getters.totalListFilter;
      },
      getTotal: function(){
        return this.$store.getters.getTotalPrice;
      }
    }
  }
</script>

<style scoped>
  .h-100-vh {
    height: 100vh;
  }
</style>