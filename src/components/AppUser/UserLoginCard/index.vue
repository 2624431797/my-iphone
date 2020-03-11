<template>
    <section class="logincardbox">
        <div class="logincard">
            <div class="logincard-img">
                <img src="../../../assets/local.png" alt="加载失败">
            </div>
            <van-form @submit="handlerOnSubmit">
                <van-field
                    v-model="username"
                    name="手机号"
                    label="手机号"
                    placeholder="手机号"
                    :rules="[{ required: true, message: '请填写手机号' }, { pattern, message: '请输入正确手机号' }]"
                ></van-field>
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                ></van-field>
                <div class="logincard-link" style="margin-top: 16px;">
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
            </van-form>
        </div>
    </section>
</template>

<script>
import { Dialog, Toast } from 'vant'
import { UserLogin } from "@/services"
import { mapActions, mapState, mapMutations, mapGetters } from "vuex"

export default {
    data() {
        return {
            username : '',
            password : '',
            checkbox : false,
            pattern: /1\d{10}/,
        }
    },
    methods: {
        handlerOnSubmit(values){
            const params = {username : this.username, password : this.password}
            UserLogin(params).then(res => {
                if(res.code !== 200){
                    Dialog.alert({
                        message: '登录失败',
                        confirmButtonColor: "#D78900"
                    })
                }
                else{  
                    this.$store.commit("userObj", {username : res.data.userName, userimg: res.data.userImg})
                    this.$store.dispatch("userLogin", true)          //设置Vuex登录标志为true，默认userLogin为false
                    //Vuex在用户刷新的时候userLogin会回到默认值false
                    localStorage.setItem("Flag", "isLogin")          //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录
                    localStorage.setItem("userName", this.$store.state.myLogin.userName)
                    localStorage.setItem("userImg", this.$store.state.myLogin.userImg)
                    Toast.loading({
                        message: '登录中',
                        forbidClick: true
                    })
                    setTimeout(() => {
                        this.$router.push("/mine")                           //登录成功后跳转到指定页面
                    }, 2000)
                }
            })
        }
    },
}
</script>

<style lang="scss">
    .logincard{
        width: 100%;
        .logincard-img{
            display: flex;
            height: 160px;
            justify-content: center;
            align-items: center;
            img{
                width: 60px;
                height: 60px;
            }
        }
        .van-cell{
            margin-bottom: 10px;
        } 
        .logincard-link{
            height: 30px;
            margin-bottom: 50px;
            div{
                width: 50%;
                height: 30px;
                float: left;
                text-align: center;
                line-height: 30px;
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