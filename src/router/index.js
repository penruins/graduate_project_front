import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/insert/UserInsert'
import UserList from '../views/list/UserList'
import WriteArticle from '../views/WriteArticle'
import CategoryList from "../views/list/CategoryList";
import ArticleList from "../views/list/ArticleList";
import FinanceList from "../views/list/FinanceList";
import Login from "../views/Login";
import DashBoard from "../views/DashBoard";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DashBoard,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/user',
    name: 'insertUser',
    component: User,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/writeArticle',
    name: 'writeArticle',
    component: WriteArticle,
    meta: {
    }
  },
  {
    path: '/post',
    name: 'Article',
    component: () => import("../views/MainArticle"),
    meta: {
        title: "文章详情"
    }
  },
  {
    path: '/userList',
    name: 'userList',
    component: UserList,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/messageList',
    name: 'messageList',
    component: () => import("../views/list/MessageList"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/waterQuery',
    name: 'waterQuery',
    component: () => import("../views/query/WaterQuery"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/message',
    name: 'message',
    component: () => import("../views/query/Message"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/categoryList',
    name: 'categoryList',
    component: CategoryList,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/articleList',
    name: 'articleList',
    component: ArticleList,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/ActivityList',
    name: 'activityList',
    component: () => import("../views/list/ActivityList"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/Complain',
    name: 'complain',
    component: () => import("../views/query/Complain"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/ArticleList2',
    name: 'articleList2',
    component: () => import("../views/list/ArticleList2"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/ApplyEvent',
    name: 'applyEvent',
    component: () => import("../views/query/ApplyEvent"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/financeList',
    name: 'financeList',
    component: FinanceList,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
