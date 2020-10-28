const pageMain = [
    {
        path: '/serviceInformation',
        name: 'serviceInformation',
        component: () =>
            import('../views/service/serviceInformation.vue'),
        meta: {
            title: '服务信息'
        }
    },
    {
        path: '/personIndex',
        name: 'personIndex',
        component: () =>
            import('../views/person/personIndex.vue'),
        meta: {
            title: '我的'
        }
    },
];
export default pageMain;
