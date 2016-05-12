<template>
  <div class="page page-current">
    <x-header
      :left-options="{showBack: true,backFlag:'isShowCarBrand'}"
    >
      选择列表
    </x-header>

    <div class="content content-padded" style="margin-top: 50px;">
      <alphabet-panel :list="list" title-flag="countryName" :type="type"></alphabet-panel>
    </div>
  </div>
</template>
<script>
  import 'whatwg-fetch';
  import AlphabetPanel from "./ui/AlphabetPanel"
    export default{
        data(){
            return{
              type: '1',
              list: []
            }
        },
        ready(){
          var me = this;
          fetch('/static/data.json')
            .then(function(response) {
              return response.json()
            }).then(function(json) {
            me.list = json;
            console.log('parsed json', json)
          }).catch(function(ex) {
            console.log('parsing failed', ex)
          })
        },
        methods:{
        },
        components:{
          AlphabetPanel
        }
    }
</script>
<style scope>
</style>
