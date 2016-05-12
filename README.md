# mmcar

一个最近要做的小项目

## 类库

* 基于最新的vue-cli脚手架版本
* 基于SUI的页面滚动处理 它的滚动处理的很好 封装了一层iscroll
* 个人工具库

## 目的

* 加入mock模拟数据
* 可能有多入口 需要拿到具体需求分析后再看是否要加 其实做过好多多入口了……但无奈比较懒 没做例子

## RECORD

* 很早就听过vux 这回一看 简直是财富 why 看人家组件怎么封装 学学……
* 把常用的Header扒过来
* 貌似Header有点不好用 改了改 首先放到了全局挂载 其次把后退的方式改了下 传关闭标志位 或 直接使用 调用组件方的back
* 需要个字母的list 巧了vux里有panel列表 复制一份改成了AlphabetPanel 加了个计算属性和方法过滤器

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
