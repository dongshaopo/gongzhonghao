import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes'
import store from '../store'
import pub from '../util/plugins';
Vue.use(Router);
const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    base: process.env.BASE_URL,
    routes,
});
// const excludeRoute = ['Login', 'SmsLogin', 'ForgetPass', 'BindMobile', 'SetPass', 'Treaty', 'Index', 'Course', 'Record', 'Person', 'Practise'];
const excludeRoute = ['Pay', 'CourseDetail', 'BookDetail', 'Teacher', 'NewsDetail', 'PostDetail', 'PractiseNotes']
/** 
 * 底部tab显隐控制
*/
router.beforeEach(async (to, from, next) => {
    // 设置title，如果没有则显示空格，这里直接用空格的话，会显示当前url
    document.title = to.meta.title
    store.state.tab_list.forEach(item => {
        if (item.url == to.name) {
            document.title = item.name
        }
    })
    // console.log(to)
    // console.log(Boolean(from.name) == false)
    if (from.name && (!['Login', 'SmsLogin'].includes(from.name)) && ['Login', 'SmsLogin'].includes(to.name)) {
        sessionStorage.login_normal = 1
    }
    // 解决ios微信复制链接和分享，url始终不变的问题
    // if (pub.isWeiXin() && !excludeRoute.includes(to.name) && to.path !== location.pathname) {
    //     location.assign(to.fullPath);
    // }
    if (pub.isWeiXin() && !excludeRoute.includes(to.name)) {
       // store.dispatch('setShare', { share_type: 1, route: to })
    }
    // set keep-alive
    if (to.meta.cacheRoot) {
        store.commit('SET_KEEPALIVE', [to.name]);
    } else if (to.meta.cacheChild) {
        // 多于2层就清空
        // if (store.state.keepAlivesDynamic.length >= 2) {
        //     store.commit('SET_KEEPALIVE', []);
        // } else {
        store.commit('ADD_KEEPALIVE', to.name);
        // }
    } else {
        store.commit('SET_KEEPALIVE', []);
    }
    // next
    next()
})
export default router