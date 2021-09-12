export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: '欢迎',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: '二级管理页',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '查询表格',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    name: 'react子应用',
    path: '/reactApp',
    microApp: 'reactApp',
    routes: [
      {
        path: '/reactApp/Welcome',
        name: 'Welcome',
        icon: 'smile',
        // routes: [
        //   {
        //     path: '/reactApp/reactA/reactAb',
        //     name: 'reactAb',
        //     icon: 'smile',
        //     component: './Welcome',
        //   },
        // ],
      },
      {
        name: 'table-list',
        icon: 'table',
        path: '/reactApp/list',
      },
    ],
  },
  {
    name: 'vue子应用',
    path: '/vueApp',
    microApp: 'vueApp',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
