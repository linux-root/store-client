<template>
  <v-layout column justify-center align-center>
    <Carousel></Carousel>
    <v-flex xs12 sm8 md6>
      <Carousel></Carousel>
    </v-flex>

    <div class="fb-customerchat"
         page_id="551298251956658"
         logged_in_greeting="Xin chào, chúng tôi có thể giúp gì cho quý khách ạ. Xin để lại tin nhắn"
         logged_out_greeting="Xin chào, chúng tôi có thể giúp gì cho quý khách ạ. Xin để lại tin nhắn">
    </div>

  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Carousel from '~/components/Carousel.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    Carousel
  }
}
</script>
