<template>
    <div class="user">
        <h2>user</h2>
        <!-- <h2>{{useId}}</h2> -->
        <h2>{{$route.params.bbb}}</h2>
        <h2>{{finalMessage}}</h2>
        <h3>{{message}}</h3>
        <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
export default {
    name: 'User',
    data() {
        return {
            message: '你好'
        }
    },
    created(){
        console.log('created');
        // document.title = '用户'
    },
    computed: {
        useId(){
            // $router拿到的是index.js文件中的router
            // $route拿到的是当前处于活跃状态的路由
            // params：参数
            return this.$route.params.bbb
        },
        finalMessage(){
            return this.message
        }
    },
    methods:{
        btnClick(){
            console.log(this.$route)
        }
    }
}
</script>