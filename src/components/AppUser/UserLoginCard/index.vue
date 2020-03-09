<template>
    <section class="logincardbox">
        <div class="logincard">
            <div @submit="onSubmit">
                <van-field
                    v-model = "username"
                    name = "用户名"
                    label = "用户名"
                    placeholder = "用户名"
                ></van-field>
                <van-field
                    v-model = "password"
                    type = "password"
                    name = "密码"
                    label = "密码"
                    placeholder = "密码"
                ></van-field>
                <van-field 
                    name = "checkbox" 
                    label = "记住密码"
                >
                    <template #input>
                        <van-checkbox v-model="checkbox" shape="square" />
                    </template>
                </van-field>
                <div class="logincard-link">
                    <div class="logincard-link-left">
                        <router-link to="/appregister">
                            <span>立即注册</span>   
                        </router-link>
                    </div>
                    <div class="logincard-link-right">
                        <a href="JavaScript: ;">找回密码</a>
                    </div>
                </div>
                <div style="margin: 16px;">
                    <van-button 
                        round 
                        block 
                        type="info" 
                        native-type="submit"
                    >登 录</van-button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            username : null,
            password : null,
            checkbox : false,
        }
    },
    methods: {
        onSubmit(values){
            console.log('submit', values)
        },
    },
}
</script>

<style lang="scss">
    .logincard{
        width: 100%;
        .van-cell{
            margin-bottom: 10px;
        } 
        .logincard-link{
            height: 20px;
            margin-bottom: 10px;
            div{
                width: 50%;
                height: 20px;
                float: left;
                text-align: center;
                line-height: 20px;
                span,a{
                    color: #1989fa;
                }
            }
        }
        .van-button{
            background-color: #ff7426;
            border: 1px solid #ff7426;
        }
    }
</style>