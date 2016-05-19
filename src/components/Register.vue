<template>
  <div class="page page-current">
    <div class="content content-padded" style="margin-top: 50px;">
      <div class="register-logo">
        <img src="../assets/register-logo.png" />
      </div>
      <!--注册表单-->
      <flexbox class="mm-border-bottom">
        <flexbox-item>
          <div class="flex-demo">
            <x-input placeholder="手机号码"></x-input>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox class="mm-border-bottom">
        <flexbox-item>
          <x-input placeholder="请输入验证码"></x-input>
        </flexbox-item>
        <flexbox-item :span="5">
          <div @click="getRegisterCode" class="flex-demo weui_cell mm-code-btn">
            发送验证码
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox class="mm-border-bottom">
        <flexbox-item>
          <x-input placeholder="设置登录密码(6-14位)"></x-input>
        </flexbox-item>
      </flexbox>
      <flexbox class="mm-reg-btn">
        <flexbox-item>
          <x-button type="primary" @click="updateRegister" >注册</x-button>
        </flexbox-item>
      </flexbox>
      <!--活动介绍-->
      <div class="intro">
        <div class="intro-title">
          <span>活动规则</span>
        <div class="intro-line"></div>
        </div>
        <div class="intro-content">
          <p>1、所有已注册用户均可邀请好友注册美美用户。</p>
          <p>2、邀请的好友成功注册并登陆客户端，系统自动发放积分到邀请人账户。</p>
          <p>3、每成功邀请1个用户注册并登录，邀请人将获得500积分奖励。</p>
          <p>4、注册美美账户的用户，将获得100积分奖励。</p>
          <p>5、本次活动最终解释权归美美买车所有。</p>
        </div>
      </div>
    </div>


  </div>
  <car-brand-panel v-if="isShowCarBrand" transition="page"></car-brand-panel>
</template>
<script>
  import Flexbox from "./ui/Flexbox"
  import FlexboxItem from "./ui/FlexboxItem"
  import Divider from "./ui/Divider"
  import XInput from "vux-components/x-input"
  import XButton from "vux-components/x-button"
  import CarBrandPanel from "./CarBrandPanel"
  import CommonTool from "../vendors/common"
  export default{
    data(){
      return {
        isShowCarBrand:false,
        telephone:"18601363531"
      }
    },
    methods:{
      showCarBrand(){
        this.isShowCarBrand = true
      },
      getRegisterCode(){
        let me = this;
//        me.$http.post(mmapi.getRegisterCode,{
//          info:"{telephone:"+me.telephone+"}"
//        }).then(function(response){
//          console.info(response)
//        }, function(err){
//
//        });
      },
      updateRegister(){
        this.isShowCarBrand = true;
      }
    },
    components: {
      Flexbox,
      FlexboxItem,
      XInput,
      XButton,
      CarBrandPanel
    }
  }
</script>
<style scope>
</style>
