# 目前进度

![已完成部分演示](http://7jpswm.com1.z0.glb.clouddn.com/mmcardemo.gif)

# mmcar

一个最近要做的小项目

## 类库

* 基于最新的vue-cli脚手架版本
* 基于weui的vux ui库
* 基于SUI的页面滚动处理 它的滚动处理的很好 封装了一层iscroll
* 个人工具库 貌似没啥用……

## 目的

* 加入mock模拟数据
* 可能有多入口 需要拿到具体需求分析后再看是否要加 其实做过好多多入口了……但无奈比较懒 没做例子

## RECORD

* 很早就听过vux 这回一看 简直是财富 why 看人家组件怎么封装 学学……
* 把常用的Header扒过来
* 貌似Header有点不好用 改了改 首先放到了全局挂载 其次把后退的方式改了下 传关闭标志位 或 直接使用 调用组件方的back
* 需要个字母的list 巧了vux里有panel列表 复制一份改成了AlphabetPanel 加了个计算属性和方法过滤器
* 想用fetch做数据请求 设置no-cors 能在开发工具中看到返回值 但是response.json() 拿不到 状态是0 忙完再研究
* 选择品牌车辆和选择车型其实也可以做两个视图组件单独处理 流程下去 但是一想 有popup 一想其中一个还不是全遮挡 那就用popup做吧
* 中间对panel改了改 对tab改了改都是很小的改动
* 继续把提交做了……在接口不通的情况下 先postman模拟吧……
* 界面差不太多了 再抠一抠 把校验做下 数据走下~~

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
