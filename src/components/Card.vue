<template>
  <div class="card">
    <img class="card-img-top" v-bind:src="itemData.image_link" alt="Card image cap">
    <div class="card-body">
        <h3 class="card-title">{{ itemData.name }}</h3>
        <h6 class="card-subtitle mb-2 text-muted">Rp. {{ itemData.price }}</h6>
        <p class="card-text">{{ itemData.description }}</p>
        <a href="#" class="btn btn-secondary  btn-block" v-on:click="$emit('add-to-cart', itemData)">Add To Card</a>
    </div>
  </div>
</template>

<script>
  // import axios from 'axios';

  export default {
    data () {
      return {
        // itemData: this.itemData
      }
    },
    props:{
      itemData: Object
    }
  }
</script>