<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-4">
        <nav class="navbar navbar-expand-lg navbar-secondary bg-secondary">
          <a class="navbar-brand text-white" href="#">Navbar</a>
          <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown link
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div> -->
        </nav>
      
      </div>
      <div class="col-8">
        <div class="row">
          <template v-for="list in menuLists">
            <div class="col-sm-4">
              <single-card v-bind:item-data="list" v-on:add-to-cart="cartItems.push($event)"></single-card>
            </div>
          </template>
        </div>
      </div>
      <div class="col-4">
        <total-price v-bind:totalItems="cartTotalItems"></total-price>
      </div>

    </div>
  </div>
</template>

<script>
  import Card from './Card.vue';
  import Total from './Total.vue';
  import MenuList from './menu-source.json';
  export default {
    data () {
      return {
        menuLists: MenuList,
        cartItems: this.$store.state.totalItemList
      }
    },
    components: {
      'single-card': Card,
      'total-price': Total
    },
    computed: {
      cartTotalItems: function () {
        this.$store.commit('modifyItem', this.cartItems);
        return this.cartItems;
      }
    }
  }
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }


</style>