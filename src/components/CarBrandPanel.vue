<template>
  <div class="page page-current">
    <x-header
      :left-options="{showBack: true,backFlag:'isShowCarBrand'}"
    >
      选择想买的车
    </x-header>

    <div class="content content-padded" style="margin-top: 50px;">
      <group title="热门品牌">
        <flexbox>
          <flexbox-item><div class="flex-demo">1</div></flexbox-item>
          <flexbox-item><div class="flex-demo">2</div></flexbox-item>
          <flexbox-item><div class="flex-demo">3</div></flexbox-item>
        </flexbox>
      </group>
      <alphabet-panel :list="list" title-flag="name" img-flag="image" :type="type"></alphabet-panel>
      <!--品牌-车型列表选择 popup-->
      <popup :show.sync="showCarTypePopup" height="100%">
        <div class="cartype-popup content">
          <x-header
            :left-options="{showBack: true,backFlag:'showCarTypePopup'}"
          >
            选择想买的车
          </x-header>
          <panel :list="curCarTypeList" :type="groupType" event-flag="cartype" title-flag="carModel" group-title-flag="name" childs-flag="carttype" img-flag="image"></panel>
        </div>
      </popup>

      <!--车辆选择 popup-->
      <popup :show.sync="showCartCarPopup" height="100%">
        <div class="cartcar-popup content">
          <x-header
            :left-options="{showBack: true,backFlag:'showCartCarPopup'}"
          >
            选择想买的车
          </x-header>
          <tab :animate=false>
            <!--根据排量动态插入-->
            <tab-item v-for="item in curCartCarList" :selected="curCartCarVolume === $index" @click="switchTab($index)">{{item.volume}}</tab-item>
          </tab>
          <panel v-for="item in curCartCarList" v-show="curCartCarVolume==$index" class="mm-cart-panel" :list="item.type"
                 :type="cartGroupType"
                 title-flag="content"
                 group-title-flag="modelYear"
                 childs-flag="cartcar"
                 text-flag="gearboxType"
                 event-flag="cartcar"
                 desc-flag="price"
                 desc-start-prefix="指导价:"
                 desc-end-prefix="万"
          ></panel>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
  import Flexbox from "./ui/Flexbox"
  import FlexboxItem from "./ui/FlexboxItem"
  import AlphabetPanel from "./ui/AlphabetPanel"
  import Panel from "./ui/Panel"
  import Group from "./ui/Group"
  import Popup from "./ui/popup/"
  import Tab from "./ui/Tab"
  import TabItem from "./ui/TabItem"
  import pinyin from  "pinyin"
  import CommonTool from "../vendors/common"

  export default{
        data(){
            return{
              type: '1',
              groupType:'4',
              cartGroupType:'5',
              list: [],
              showCarTypePopup:false,
              showCartCarPopup:false,
              curCarTypeList:[],
              curCartCarList:[],
              curCartCarVolume:0
            }
        },
        ready(){
          var me = this;
          me.$http.get('/static/data.json').then(function(response){
            let json = response.data;
            for(let i in json.list){
              let _curBrand = json.list[i];
              //判断是否为汉字 是的话转为拼音
              if(CommonTool.checkIsChinese(_curBrand.name[0])){
                if("讴"==_curBrand.name[0]){
                  _curBrand.spell = "O"
                }else{
                  _curBrand.spell = pinyin(_curBrand.name[0],{
                    style:pinyin.STYLE_FIRST_LETTER
                  });
                  _curBrand.spell = _curBrand.spell[0][0].toUpperCase();
                }
              }else{
                //如果是英文直接拿着用
                _curBrand.spell = _curBrand.name[0].toUpperCase();
              }
            }
            me.list = json.list;
          }, function(err){

          });
        },
        methods:{
          switchTab(volume){
            let me = this;
            me.curCartCarVolume = volume
          },
          closePopup(){
            this.showCarTypePopup = false
          },
          closeCartCarPopup(){
            this.showCartCarPopup = false
          }
        },
        events:{
          "on-click-alphabet-item":function(item){
//            请求品牌的车型列表
            let me = this;
            me.$http.get('/static/cartype.json').then(function(response){
              console.info(response);
              let data  = response.data;
              //显示车型
              me.curCarTypeList = data.list
              this.showCarTypePopup = true
            })
          },
          "on-click-cartype-item":function(item){
//            请求品牌的车型列表
            let me = this;
            me.$http.get('/static/cartcar.json').then(function(response){
              console.info(response);
              let data  = response.data
              me.curCartCarList = data.list
              //显示排量
              me.showCartCarPopup = true
            })
//            me.$http.get('/static/cartcar.json').then(function(response){
//              console.info(response);
////              let data  = response.data;
////              me.curCarTypeList = data.list
////              this.showCarTypePopup = true
//            })
          },
          "on-click-cartcar-item":function(item){
            //请求品牌的车型列表
            let me = this;
            //注册
          }
        },
        components:{
          AlphabetPanel,
          Group,
          Flexbox,
          FlexboxItem,
          Popup,
          Panel,
          Tab,
          TabItem
        }
    }
</script>
<style scope>
  .active-6-1 {
    color: rgb(252, 55, 140) !important;
    border-color: rgb(252, 55, 140) !important;
  }
  .active-6-2 {
    color: #04be02 !important;
    border-color: #04be02 !important;
  }
  .active-6-3 {
    color: rgb(55, 174, 252) !important;
    border-color: rgb(55, 174, 252) !important;
  }
</style>
