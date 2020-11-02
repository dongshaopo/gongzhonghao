import pageMain from './pageMain'
const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'Index',
        component: () =>
            import('../views/index/Index.vue'),
        meta: {
            footer: true,
            title: '首页'
        }
    },
    {
        path: '/test',
        name: 'test',
        component: () =>
            import('../views/index/test.vue'),
        meta: {
            footer: true,
            title: '测试页面'
        }
    },
    ...pageMain,
]

export default routes
