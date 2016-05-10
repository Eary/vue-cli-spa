<template>
  <div id="app" class="page page-current">
      <header class="bar bar-nav">
          <a v-on:click="goNext" class="icon icon-right pull-right"></a>
          <h1 class="title">第一页</h1>
      </header>
      <div class="content">
          <div class="list-block contacts-block">
              <div class="list-group">
                  <ul>
                      <li class="list-group-title">A</li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题1</div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题2</div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题3</div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题4</div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题5</div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题6</div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题7</div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题8</div>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
              <div class="list-group">
                  <ul>
                      <li class="list-group-title">B</li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题1</div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题2</div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题3</div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题4</div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题5</div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题6</div>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
              <div class="list-group">
                  <ul>
                      <li class="list-group-title">C</li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题1</div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题2</div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题3</div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题4</div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题5</div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题6</div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题7</div>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
              <div class="list-group">
                  <ul>
                      <li class="list-group-title">V</li>
                      <li>
                          <div class="item-content">
                              <div class="item-inner">
                                  <div class="item-title">标题1</div>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
  <hello v-if="isHello" transition="page"></hello>
</template>

<script>
import Hello from './components/Hello'

export default {
    data(){
        return {
            isHello:false
        }
    },
    methods:{
        goNext(){
            this.isHello = true
        }
    },
  components: {
    Hello
  }
}
</script>

<style>
</style>
