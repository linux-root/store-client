<template>
      <v-carousel>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src">
        </v-carousel-item>
      </v-carousel>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            src: '/photos/c1.jpg'
          },
          {
            src: '/photos/c2.jpg'
          },
          {
            src: '/photos/c3.jpg'
          },
          {
            src: '/photos/c4.jpg'
          }
        ]
      }
    }
  }
</script>
