<template>
  <router-link :to="{name: 'simcards-id', params: {id: product.id}}">
  <v-card hover raised>
      <v-img :src="product.image.url" height="400px"></v-img>
    <v-card-title>
      <div>
        <h3 class="headline ">{{shortenedProductName}}</h3>
      </div>
    </v-card-title>
    <v-divider light></v-divider>
    <v-card-actions >
     <v-spacer></v-spacer><h5 class="red--text accent-2 title">{{product.price}}₫</h5>
    </v-card-actions>
  </v-card>
  </router-link>
</template>

<script>
    export default {
        name: "Product",
        computed: {
          shortenedProductName(){
            return this.product.name.substr(0, 26) + "..."
          }
      },
      props : ['product']
    }
</script>
