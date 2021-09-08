export default {
  routes: [
    // 配置微应用reactApp关联的路由
    {
      name: 'reactApp',
      path: '/reactApp',
      microApp: 'reactApp',
    },
    // 配置微应用vueApp关联的路由
    {
      name: 'vueApp',
      path: '/vueApp',
      microApp: 'vueApp',
    },
  ],
};
