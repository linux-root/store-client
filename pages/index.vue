<template>
  <v-layout column justify-center align-center>
    <Carousel></Carousel>
    <v-flex
      xs12
      sm8
      md6>
      <Carousel></Carousel>
    </v-flex>
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
