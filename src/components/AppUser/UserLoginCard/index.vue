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
export default {
    data() {
        return {
            username : '',
            password : '',
            checkbox : false,
            pattern: /1\d{10}/,
        }
    },
    components : {
        
    },
    methods: {
        handlerOnSubmit(values){
            console.log(values)
        },
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