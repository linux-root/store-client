<template>
    <div class="product-details">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-details__image">
                    <img class="img-responsive" :src="productImageURL" alt="image">
                  <div class="product-details__price-cart">
                    <p class="text-danger"> Giá {{product.price}} VND</p>
                  </div>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 product-details__info">
                    <div class="product-details__description">
                        <h3>{{product.name}}</h3>
                        <div v-html="compiledMarkdown">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import marked from 'marked'
    import Strapi from 'strapi-sdk-javascript'
    export default {
      computed :{
        product(){
          return this.$store.getters['simcard/getCurrentSimcard']
        },
        productImageURL(){
          let product = this.$store.getters['simcard/getCurrentSimcard']
          if(product.image){
            return product.image.url
          }
        },
        compiledMarkdown(){
          let product = this.$store.getters['simcard/getCurrentSimcard']
          if(product.description){
            return marked(product.description, {sanitize : true})
          }
        }
      },
       async created(){
          const id = this.$route.params.id
          let product = this.$store.getters['simcard/getById'](id)
          if(product === undefined || product.id  === undefined){
              const API_URL = process.env.API_URL //this is env from nuxt config, not actual process.env.
              const strapi = new Strapi(API_URL)
              const sim= await strapi.request('get', `simcards/${id}`)
              const absoluteImageURL = API_URL + sim.image.url
              sim.image.url = absoluteImageURL
               this.$store.commit('simcard/setCurrentSimcard', {id: sim._id,...sim})

          } else {
            this.$store.commit('simcard/setCurrentSimcard', product)
          }
        }
    }
</script>

<style>
    .product-details {
        border-bottom: 2px solid #F5F5F5;
        padding: 30px 0;
    }

    .product-details__image {

    }

    .product-details__description {
        padding-top: 30px;
    }

    .product-details__description small {
        color: #808080;
    }

    .product-details__description h3 {
        margin: 5px 0 30px 0;
    }

    .product-details__price-cart {
        display: flex;
        padding-top: 30px;
    }

    .product-details__price-cart p {
        flex-grow: 2;
        font-size: 20px;
        font-weight: bold;
    }

    .product {
      background: #FFF;
      padding: 15px;
      margin-bottom: 15px;
      transition: all 200ms ease-in;
    }

    .product:hover {
      transform: scale(1.1) translateY(-15px);
      box-shadow: 7px 9px 18px -2px rgba(61,61,61,1);

    }

    .product-link {
      display: block;
      color: #3D3D3D;
    }

    .product-link:hover {
      color: #3D3D3D;
      text-decoration: none;
    }

    .product .product__image {
      width: 100%;
    }

    .product__image img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .product__description {
      width: 100%;
    }

    .product__description small {
      color: #808080;
    }

    .product__description h4 {
      margin: 3px 0 5px 0;
    }

    .product__price-cart {
      display: flex;
      margin-top: 10px;
    }

    .product__price-cart p {
      flex-grow: 2;
      font-size: 20px;
      font-weight: bold;
    }

</style>
