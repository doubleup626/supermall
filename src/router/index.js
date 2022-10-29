// import Vue from 'vue'
import {createRouter,createWebHistory} from 'vue-router'
const Home = () => import('@/views/tabbar/home/home.vue')
const Category = () => import('@/views/tabbar/category/category.vue')
const Shopcart= () => import('@/views/tabbar/shopcart/shopcart.vue')
const Profile = () => import('@/views/tabbar/profile/profile.vue')

// Vue.use(Router)
const routerHistory = createWebHistory()

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/shopcart',
        component:Shopcart
    },
    {
        path:'/profile',
        component:Profile
    }
]

const router =createRouter({
    routes,
    mode:'history',
    history:routerHistory
})

export default router