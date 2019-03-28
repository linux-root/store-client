<template>
  <div class="product">
  <v-card flat title>
    <v-img :src="product.image.url"/>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{product.name}}</h3>
      </div>
    </v-card-title>

    <v-divider light></v-divider>

    <v-card-actions class="pa-3">
     <strong class="red--text display-1 font-weight-bold">{{product.price}}₫</strong>
    </v-card-actions>
    <v-card-actions class="pa-3">
      <v-spacer></v-spacer>
      <span v-for="i in 5"><v-icon >star_rate</v-icon></span>
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
