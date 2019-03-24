<template>
  <div class="product">
  <v-card flat title>
    <v-img :src="product.image.url"/>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{product.name}}</h3>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat color="orange">{{product.price}}₫</v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
    export default {
        name: "Product",
      data (){
          return{
           fuck: 'x'
          }
      },
      props : ['product']
    }
</script>
<style>
  .product:hover {
    transform: scale(1.1) translateY(-15px);
    box-shadow: 7px 9px 18px -2px rgba(61, 61, 61, 1);
  }
</style>