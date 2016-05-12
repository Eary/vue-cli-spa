<template>
  <div class="weui_panel weui_panel_access">
    <template v-for="item in listDataByLetters | orderBy letterByPinyin">
      <div class="weui_panel_hd"  @click="onClickHeader">{{item.letter}}</div>
      <div class="weui_panel_bd">
        <!--type==='1'-->
        <a href="javascript:;" v-for="data in item.datas" @click="onItemClick(data)" class="weui_media_box weui_media_appmsg" v-if="type === '1'">
          <div class="weui_media_hd" v-if="data.src">
            <img class="weui_media_appmsg_thumb" :src="data.src" alt="">
          </div>
          <div class="weui_media_bd">
            <h4 class="weui_media_title">{{data[titleFlag]}}</h4>
            <p class="weui_media_desc">{{data.desc}}</p>
          </div>
        </a>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    header: String,
    footer: String,
    list: Array,
    type: {
      type: String,
      default: '1'
    },
    titleFlag:String
  },
  methods: {
    onClickFooter () {
      this.$dispatch('on-click-footer')
    },
    onClickHeader () {
      this.$dispatch('on-click-header')
    },
    onItemClick (item) {
      this.$dispatch('on-click-item', item)
    },
    letterByPinyin:function(a,b){
      return a.letter.localeCompare(b.letter);
    }
  },
  computed:{
    listDataByLetters:function(){
      var val = this.list;
      var goupDataArry = {};
      var _valLength = val.length;
      var _recordSpellFirst = "";//"ACBD".indexOf("A")
      for(var i = 0;i<_valLength;i++){
        var _curItem = val[i];
        var _curSpellFirst = _curItem.spell[0].toUpperCase();
        if(_recordSpellFirst.indexOf(_curSpellFirst)==-1){
          _recordSpellFirst+=_curSpellFirst;
          goupDataArry[_curSpellFirst] = [];
          goupDataArry[_curSpellFirst].push(_curItem);
        }else{
          goupDataArry[_curSpellFirst].push(_curItem);

        }
      }
      var _letterDataArry = [];
      for(var letter in goupDataArry){
        _letterDataArry.push({
          letter:letter,
          datas:goupDataArry[letter]
        })
      }
      return _letterDataArry;
    }
  }
}
</script>
