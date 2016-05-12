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
            'other-component':OtherComponent,
            HeaderComponent,
        }
    }
</script>
<style scope>
    body{
        background-color:#ff0000;
    }
</style>
