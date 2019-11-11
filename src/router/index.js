/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 12:03:45
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-08 16:26:48
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index';
import ClassifyPage from '@/pages/ClassifyPage';
import BookDetailPage from '@/pages/BookDetailPage';
import ShoppingCarPage from '@/pages/ShoppingCarPage';
import LoginPage from '@/pages/LoginPage';
import MePage from '@/pages/MePage';

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/ClassifyPage',
      name: 'ClassifyPage',
      component: ClassifyPage,
      beforeEnter(to,from,next){
         console.log("/BookDetailPage这个路径守卫了");
         next();
      }
    },
    {
      path: '/BookDetailPage/:id',
      name: 'BookDetailPage',
      component: BookDetailPage,
      props:true,
      beforeEnter(to,from,next){
         console.log("/BookDetailPage这个路径守卫了");
         next();
      }
    },
    {
      path: '/ShoppingCarPage',
      name: 'ShoppingCarPage',
      component: ShoppingCarPage,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/LoginPage/:from',
      name: 'LoginPage',
      component: LoginPage,
      props:true
    },
    {
      path: '/MePage',
      name: 'MePage',
      component: MePage,
      props:true
    }
  ]
})

router.beforeEach((to,from,next)=>{
    // if(to.fullPath=='/login' || to.fullPath='/Index'){
    //     next();  
    // }else if(!localStorage.getItem('username')){
    //     next(false);
    // }
    // console.log('前置守卫');
    // console.log(to);
    // console.log(from);
    // // next(false);
    // next();

    if(to.meta.requireAuth){
        console.log('前置守卫');
        console.log(localStorage.getItem('username'));
        if(localStorage.getItem('username')==null){
            // next(false);
            console.log("to.fullPath:"+to.fullPath);
            next('/LoginPage'+to.fullPath);
        }else{
            next();
        }
    }else{
       next();
    }
});

router.afterEach((to, from) => {
  // console.log('后置守卫');
  // console.log(to);
  // console.log(from);
})

export default  router;