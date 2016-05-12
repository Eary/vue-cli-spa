<template>
  <div class="page page-current">
    <x-header
      :left-options="{showBack: true,backFlag:'isShowCarBrand'}"
    >
      选择车辆品牌
    </x-header>

    <div class="content content-padded" style="margin-top: 50px;">
      <panel header="图文组合列表" :list="list" :type="type"></panel>
      <!--<div class="list-block contacts-block">-->
        <!--<div class="list-group">-->
          <!--<ul>-->
            <!--<li class="list-group-title">A</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题1</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题2</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题3</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题4</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题5</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题6</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题7</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题8</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
        <!--<div class="list-group">-->
          <!--<ul>-->
            <!--<li class="list-group-title">B</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题1</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题2</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题3</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题4</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题5</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题6</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
        <!--<div class="list-group">-->
          <!--<ul>-->
            <!--<li class="list-group-title">C</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题1</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题2</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题3</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题4</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题5</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题6</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题7</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
        <!--<div class="list-group">-->
          <!--<ul>-->
            <!--<li class="list-group-title">V</li>-->
            <!--<li>-->
              <!--<div class="item-content">-->
                <!--<div class="item-inner">-->
                  <!--<div class="item-title">标题1</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>
<script>
    import Panel from "./ui/Panel"
    export default{
        data(){
            return{
              type: '1',
              list: [{
                src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                title: '标题一'
//                desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
              }, {
                src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                title: '标题二',
                desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'
              }]
            }
        },
        methods:{
        },
        components:{
          Panel
        }
    }
</script>
<style scope>
</style>
