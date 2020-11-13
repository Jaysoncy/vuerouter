<template>
    <div class="home">
        <h2>home</h2>
        <router-link to='/home/news' tag='button'> 新闻 </router-link>
        <router-link to='/home/message' tag='button'> 消息 </router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return {
            path:'/home/news'
        }
    },
    //当组件被创建时，会回调created函数
    created(){
        console.log('home created');
        // document.title = '首页'
    },
    //当把template挂载到DOM上面，就会回调mounted函数
    destroyed(){
        console.log('home destroyed');
    },


//只有该组件被保持状态使用了keep-alive时，这两个函数
//  activated, deactivated才是有效的。
    //进入活跃状态
    activated(){
        this.$router.push(this.path);
        console.log('activated');

    },
    //离开活跃状态
    deactivated(){
        console.log('非活跃');
    },

        //导航离开该组件的对应路由时调用
    //可以访问组件实例"this"
    beforeRouteLeave (to, from, next) {
        console.log (this.$route.path);
        this.path = this.$route.path;
        next()
    }




}
</script>