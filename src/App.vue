<template>
  <register></register>
</template>

<script>
import Register from './components/Register'


export default {
    data(){
        return {
          isRegister:false
        }
    },
    methods:{
        goNext(){
            this.isRegister = true
        }
    },
  components: {
    Register
  }
}
</script>

<style>
</style>
