<template>
  <div id="app">
    <h2>我是App组件</h2>
    <!-- <button @click="aboutClick()" >关于</button> --> 
    <router-link to="/home" tag="button" replace> 首页 </router-link>
    <router-link to="/about" tag="button" replace> 关于 </router-link>
    <!-- <router-link :to="{path: '/profile', query: {name: 'why', age: 18, height: 1.88}}" tag="button" replace> 档案 </router-link> -->
    <button @click="profileClick()">档案</button>
    <button @click='userClick()'>用户</button>
    <!-- //动态绑定to属性 -->
    <!-- <router-link :to="'/user/'+userId" tag='button' replace> 用户 </router-link> -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId: 'zhangsan',
      imgURL: 'www.baidu.com'
    }
  },
  methods: {
    homeClick(){
      //通过代码的方式修改路由:vue-router
      //this表示当前组件，每个组件都有一个router属性
      // this.$router.push('/home')  //跳转路由
      this.$router.replace('/home')  //跳转路由
    },
    aboutClick(){
      this.$router.replace('/about')  //跳转路由
    },
    userClick(){
      this.$router.push('/user/' + this.userId)
    },
    profileClick(){
      //传入一个对象
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kebi',
          age: 19,
          height: 1.88
        }
      })
    },
  }
}
</script>

<style>
  .active{
    color: #f00;
  }
</style>
