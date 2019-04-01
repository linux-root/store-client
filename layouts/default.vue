<template>
  <v-app light>
    <v-navigation-drawer
      class="green lighten-3"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" class="red--text"/>
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
      <!-- Footer -->
      <v-footer >
        <v-card flat tile class="indigo lighten-1 white--text text-xs-center text-lg-center">
          <v-card-text class="text-lg-left">
            <v-icon >store</v-icon><span>  HỆ THỐNG CỬA HÀNG</span>
            <ul>
              <li v-for="address in info.addresses">
                {{address}}
              </li>
            </ul>
          </v-card-text>
        </v-card>

        <v-card flat tile class="indigo lighten-1 white--text text-xs-center text-lg-center">
          <v-card-text class="text-lg-left">
            <v-icon >local_shipping</v-icon><span> ĐỐI TÁC VẬN CHUYỂN</span>

              <div v-for="shippingPartner in info.shippingPartners">
                <v-img :sizes="21" :src="shippingPartner.icon"></v-img>
              </div>

          </v-card-text>
        </v-card>
      </v-footer>
      <!-- END Footer -->
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Cục phát sóng Wifi di động',
          to: '/inspire'
        },
        {
          icon: 'sim_card',
          title: 'SIM 4G',
          to: '/simcard'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Duynhat.com.vn',
      info: {
        addresses: [
          'Chi nhánh Hà Nội: 254 Minh Khai - Hai Bà Trưng  - Hà Nội',
          'Chi nhánh Hà Nội: 52 Lê Đại Hành - Hai Bà Trưng - Hà Nội,',
          'Chi nhánh TP Hồ Chí Minh: 53 Nguyễn Thị Minh Khai - Phường Bến Nghé - Quận 1 - TP Hồ Chí Minh',
          'Chi nhánh TP Hồ Chí Minh: 71/3 Chu Văn An - Phường 26 - Quận Bình Thạnh - TP Hồ Chí Minh'
        ],
        shippingPartners :[
          { icon: '/images/giaohangtietkiem.png'},
          { icon: '/images/viettelpost.png'},
          { icon: '/images/giaohangtietkiem.png'}
        ]
      }
    }
  },
  mounted() {
    window.FB
  }
}
</script>
