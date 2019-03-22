<template>
  <ul id="example-1">
    <li v-for="product in products">
      <Product :product="product"></Product>
    </li>
  </ul>
</template>

<script>
  import Product from '~/components/Product.vue'
  export default {
    name: 'simcard',
    data() {
      return {
        products: [
          {
            name: 'product 1',
            description: '' +
              'asdfsdl;kflele'
          },
          {
            name: 'product 2',
            description: '' +
              'asdfsdl;kflele'
          },
          {
            name: 'product 3',
            description: '' +
              'asdfsdl;kflele'
          }, {
            name: 'product 4',
            description: '' +
              'asdfsdl;kflele'
          }

        ]
      }
    },
    components: {
      Product
    }
  }
</script>
