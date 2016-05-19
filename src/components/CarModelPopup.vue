<template>
    <header-component/>
    <div>this is template body</div>
    <other-component/>
</template>
<script>
    import HeaderComponent from './components/header.vue'
    import OtherComponent from './components/other.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        }
    }
</script>
<style scope>
</style>
