<template>
    <div class="text-xs-center">
        <v-dialog
                v-model="dialog"
                width="500"
        >
            <template v-slot:activator="{ on }">
                <v-btn
                        color="red lighten-2"
                        dark
                        v-on="on"
                >
                    Chính sách bảo mật thông tin
                </v-btn>
            </template>

            <v-card>
                <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                >
                    Privacy Policy
                </v-card-title>

                <v-card-text>
                    duynhat.com.vn sử dụng thông tin thành viên cung cấp để :
                    Hỗ trợ khách hàng khi mua sản phẩm.
                    Giải đáp thắc mắc khách hàng.
                    Cung cấp cho khách hàng thông tin mới nhất trên Website của chúng tôi, thực hiện các khảo sát khách hàng, các hoạt động quảng bá liên quan đến các sản phẩm và dịch vụ của duynhat.com.vn nếu quý khách đăng kí nhận email thông báo.
                    Dữ liệu cá nhân của Thành viên sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ hoặc tự thành viên đăng nhập và thực hiện hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân sẽ được bảo mật trên máy chủ của Duynhat.com.vn
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            flat
                            @click="dialog = false"
                    >
                        I accept
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
    </div>
</template>

<script>
    export default {
        name: 'policies',
        data(){
            return {
                dialog: false
            }
        }
    }
</script>