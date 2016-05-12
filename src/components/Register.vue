<template>
  <div class="page page-current">
    <x-header
      :left-options="{showBack: false}"
    >
      用户注册
    </x-header>
    <flexbox>
      <flexbox-item>
        <div class="flex-demo">
          <x-input placeholder="手机号码"></x-input>
        </div>
      </flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item>
        <x-input placeholder="请输入验证码"></x-input>
      </flexbox-item>
      <flexbox-item :span="4">
        <div class="flex-demo">
          发送验证码
        </div>
      </flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item>
        <x-input placeholder="设置登录密码(6-14位)"></x-input>
      </flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item  style="text-align: center">
        <div v-on:click="showCarBrand">注册</div>
      </flexbox-item>
    </flexbox>
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

  export default{
    data(){
      return {
        isShowCarBrand:false
      }
    },
    methods:{
      showCarBrand(){
        this.isShowCarBrand = true
      }
    },
    components: {
//      XHeader,
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
