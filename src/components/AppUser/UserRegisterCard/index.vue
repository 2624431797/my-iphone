<template>
    <section class="registercardbox">
        <div class="registercard">
            <van-steps
                :active="active"
                active-icon="success"
                active-color="#ff7426"
            >
                <van-step>输入手机号</van-step>
                <van-step>输入验证码</van-step>
                <van-step>设置密码</van-step>
            </van-steps>
            <mt-tab-container v-model="active">
                <mt-tab-container-item id="0">
                    <van-form @submit="handlerOnSubmitUsername">
                        <van-field
                            v-model="username"
                            name="手机号"
                            placeholder="请输入您的手机号"
                            :rules="[{ required: true, message: '请填写手机号' }, { pattern, message: '请输入正确手机号' }]"
                        ></van-field>
                        <van-field name="checkbox" class="termbox">
                            <template #input>
                                <van-checkbox v-model="checkbox" checked-color="#07c160">
                                    <span style="margin-left: 10px">我已阅读并同意 <a style="color: #df2d2d; font-size: 14px;" href="JavaScript: ;">《用户协议》</a></span>
                                </van-checkbox>
                            </template>
                        </van-field>
                        <div style="margin: 16px;">
                            <van-button 
                                round 
                                block 
                                type="info" 
                                native-type="submit"
                            >
                                <span>获取验证码</span>
                            </van-button>
                        </div>
                    </van-form>
                </mt-tab-container-item>
                <mt-tab-container-item id="1">
                    <van-form @submit="handlerOnSubmitTestcode">
                        <van-field
                            v-model="testcode"
                            name="验证码"
                            placeholder="请输入验证码"
                            :rules="[{ required: true, message: '验证码不能为空' }]"
                        ></van-field>
                        <div style="margin: 16px;">
                            <van-button 
                                round 
                                block 
                                type="info" 
                                native-type="submit"
                            >
                                <span>提交验证码</span>
                            </van-button>
                        </div>
                    </van-form>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <van-form @submit="handlerOnSubmitPassword">
                        <van-field
                            v-model="password"
                            name="密码"
                            placeholder="请输入密码"
                            type="password"
                            :rules="[{ required: true, message: '密码框不能为空' }, { validator , message: '密码包括8-16位，可以包含数字、字母、下划线' }]"
                        ></van-field>
                        <van-field
                            v-model="repassword"
                            name="密码"
                            placeholder="请确认密码"
                            type="password"
                            :rules="[{ required: true, message: '确认密码框不能为空' }, { validator , message: '密码包括8-16位，可以包含数字、字母、下划线' }]"
                        ></van-field>
                        <div style="margin: 16px;">
                            <van-button 
                                round 
                                block 
                                type="info" 
                                native-type="submit"
                            >
                                <span>立即注册</span>
                            </van-button>
                        </div>
                    </van-form>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </section>
</template>

<script>
import { Dialog } from 'vant'
import { getTestCode } from "@/services"

export default {
    data() {
        return {
            active: "0",
            username : '',
            password : '',
            repassword : '',
            testcode : '',
            checkbox : true,
            pattern : /1\d{10}/,
            getTestCode : null,
        }
    },
    components: {
        [Dialog.Component.name]: Dialog.Component
    },
    methods : {
        handlerGetTestCode(){
            getTestCode().then(res => {
                this.getTestCode = res.data.testCode
            })
        },
        handlerOnSubmitUsername(values) {
            if(this.checkbox){
                this.handlerGetTestCode()
                this.active = "1"
            }
            else if(!this.checkbox){
                Dialog.alert({
                    message: '请勾选同意用户协议'
                })
            }
        },
        handlerOnSubmitTestcode(values){
            if(this.getTestCode == this.testcode){
                this.active = "2"
            }
            else{
                Dialog.alert({
                    message: '验证码错误',
                    confirmButtonColor: "#D78900"
                })
            }
        },
        handlerOnSubmitPassword(values){
            if(this.password !== this.repassword){
                Dialog.alert({
                    message: '前后输入密码不一致',
                    confirmButtonColor: "#D78900"
                })
            }
            else{
                console.log(this.username, this.password)
            }
        },
        validator(val){
            return /^(\w){8,16}$/.test(val);
        },
    }
}
</script>

<style lang="scss">
    .registercard{
        width: 100%;
        .van-steps{
            padding: 20px 20px 0px;   
            .van-step--finish{
                color: #07c160;
            }
        }
        .mint-tab-container{
            width: 100%;
            .van-button{
                background-color: #ff7426;
                border: 1px solid #ff7426;
            }
            .termbox{
                padding: 10px 64px;
            }
        }
    }
</style>