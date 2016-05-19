<template>
  <div class="page page-current">
    <div class="content content-padded" >
      <x-header
        :left-options="{showBack: true,backFlag:'registerDone'}"
      >
        注册完成
      </x-header>
      <!--注册表单-->
      <flexbox>
        <flexbox-item>
          <div class="mm-bk-logo">
            <img :src="curCarItem.image" />
            <p><span>已选择</span>{{curCarItem.content}}</p>
          </div>
        </flexbox-item>
      </flexbox>

      <flexbox>
        <flexbox-item>
          <div class="mm-reg-done mm-font-cu">
            <p>恭喜您已经成功注册xx买车</p>
            <p>赶快去体验吧~</p>
          </div>
        </flexbox-item>
      </flexbox>

      <flexbox >
        <flexbox-item>
          <div class="mm-reg-done mm-coin-intro">
            <p>积分奖励已发放至帐户11111111111</p>
            <p>登录APP即可兑换</p>
          </div>
        </flexbox-item>
      </flexbox>

      <flexbox >
        <flexbox-item>
          <div class="mm-reg-done mm-reg-logo">
            <img src="../assets/logo.png" />
          </div>
        </flexbox-item>
      </flexbox>

      <flexbox class="mm-reg-btn">
        <flexbox-item>
          <x-button type="primary" @click="download" >下载客户端</x-button>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>
<script>
  import Flexbox from "./ui/Flexbox"
  import FlexboxItem from "./ui/FlexboxItem"
  import Divider from "./ui/Divider"
  import XButton from "vux-components/x-button"
//  import CommonTool from "../vendors/common"
  export default{
    props:["curCarItem"],
    data(){
      return {
      }
    },
    ready(){
      console.info(this.curCarItem)
    },
    methods:{
      download(){
        location.href = "";
      }
    },
    components: {
      Flexbox,
      FlexboxItem,
      XButton
    }
  }
</script>
<style scope>
  .mm-bk-logo {
    text-align: center;
    margin-bottom:20px;
  }
  .mm-bk-logo img{
    width: 50%;
    margin:0 auto;
  }
  .mm-bk-logo p ,.mm-coin-intro{
    font-size:14px;
    text-align: center;
  }
  .mm-bk-logo span ,.mm-coin-intro{
    color: #6c6a6a;
  }
  .mm-coin-intro {
    margin-top:20px;
  }
  .mm-reg-done {
    text-align: center;
  }
  .mm-reg-logo img {
    width:100px;
  }
</style>
