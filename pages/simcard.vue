<template>
  <v-layout>
        <v-container class="grid-list-lg">
          <v-layout row wrap>
            <v-flex
              v-for="product in simcards"
              :key="product.id"
              xs4 lg3>
              <Product :product="product"></Product>
            </v-flex>
          </v-layout>
        </v-container>
  </v-layout>
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
