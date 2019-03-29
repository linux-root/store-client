<template>
  <v-container grid-list-md fluid>
    <v-layout row wrap>
    <v-flex :key="product.id" v-for="product in simcards" xs4>
      <router-link :to="{name: 'simcards-id', params: {id: product.id}}">
        <Product :product="product"></Product>
      </router-link>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Strapi from 'strapi-sdk-javascript'
  import Product from '~/components/Product.vue'
  export default {
    name: 'simcard',
      computed : {
        simcards(){
            return this.$store.getters['simcard/getAllSimcards']
        }
      },
    components: {
      Product
    },
      async fetch({store}) {
          const API_URL = process.env.API_URL
          console.log(process.env.API_URL)
          const strapi = new Strapi(API_URL)
          store.commit('simcard/emptyList')
          strapi.request('get', 'simcards').then(res => {
              res.forEach(sim => {
                  const imageUrl = `${API_URL}${sim.image.url}`
                  sim.image.url = imageUrl
                 console.log(sim)
                 console.log(imageUrl)
                  store.commit('simcard/add', {
                      id: sim.id,
                      ...sim
                  })
              })
          })
      }
  }
</script>
