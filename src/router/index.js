import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage= () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile= () => import('../components/Profile')

//安装VueRouter组件，内部执行VueRouter install
Vue.use(VueRouter)

const routes = [
  {
    //当路径为 时，显示路径为/home的内容
    path: '/', //加'/'和不加'/'都可以
    //redirect重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '',
      //   redirect: 'news',
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      },
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
  },
  {
    path: '/user/:bbb',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  },
]
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

//前置守卫(guard)
router.beforeEach(function (to, from, next) {
  //从from跳转到to
  document.title = to.matched[0].meta.title
  console.log('+++');
  next()  //next一定要调
})

//后置钩子(hook),不需要主动调用next()函数
router.afterEach((to, from) => {
  console.log('---');
})

export default router