<template>
<ProductDetail :product="product"></ProductDetail>
</template>

<script>
  import ProductDetail from '~/components/ProductDetail.vue'
  export default {
    components: {
       ProductDetail:  ProductDetail
    },
      props: ['product']
  }
</script>
