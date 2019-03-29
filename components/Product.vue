<template>
  <v-card :height="60" :hover="true" :raised="true">
    <v-img :src="product.image.url"></v-img>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{shortenedProductName}}</h3>
      </div>
    </v-card-title>
    <v-divider light></v-divider>
    <v-card-actions class="pa-3">
      <v-spacer></v-spacer>
     <strong class="red--text display-1 font-weight-bold">{{product.price}}₫</strong>
    </v-card-actions>
  </v-card>
</template>

<script>
    export default {
        name: "Product",
        computed: {
          shortenedProductName(){
            return this.product.name.substr(0, 40) + "..."
          }
      },
      props : ['product']
    }
</script>
<style>
/*  .product:hover {
    transform: scale(1.1) translateY(-15px);
    box-shadow: 7px 9px 18px -2px rgba(61, 61, 61, 1);
  }*/
</style>
