<template>
    <v-footer class="row">
        <v-flex lg12 md12 xs12 class="pt-5">
            <v-card flat tile class="blue darken-1 white--text text-xs-center text-lg-center">
                <v-card-text class="text-lg-left">
                    <v-icon >store</v-icon><span>  HỆ THỐNG CỬA HÀNG</span>
                    <ul>
                        <li v-for="address in addresses">
                            {{address}}
                        </li>
                    </ul>
                </v-card-text>
            </v-card>

            <!--<v-card flat-->
                    <!--tile-->
                    <!--class="indigo lighten-1 white&#45;&#45;text text-xs-center">-->
                <!--<v-card-text>-->
                    <!--<v-btn-->
                            <!--v-for="icon in icons"-->
                            <!--:key="icon"-->
                            <!--class="mx-3 white&#45;&#45;text"-->
                            <!--icon>-->
                        <!--<v-icon size="24px">{{ icon }}</v-icon>-->
                    <!--</v-btn>-->
                <!--</v-card-text>-->
            <!--</v-card>-->

        </v-flex>
    </v-footer>
</template>

<script>
    export default {
        name: 'Footer',
        data(){
            return{
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
                ],
                icons: [
                    'fab fa-facebook',
                    'fab fa-twitter',
                    'fab fa-google-plus',
                    'fab fa-linkedin',
                    'fab fa-instagram'
                ]
            }
        }
    }
</script>