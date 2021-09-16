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
    path: '/subreact',
    microApp: 'reactApp',
    routes: [
      {
        name: 'Welcome',
        icon: 'smile',
        path: '/subreact/Welcome',
      },
      {
        name: 'table-list',
        icon: 'table',
        path: '/subreact/list',
      },
    ],
  },
  {
    name: 'vue子应用',
    path: '/subvue',
    microApp: 'vueApp',
    routes: [
      {
        name: 'Dashboard',
        icon: 'smile',
        path: '/subvue/dashboard',
      },
      {
        name: 'Example',
        icon: 'table',
        path: '/subvue/example',
        routes: [
          {
            name: 'Table',
            icon: 'table',
            path: '/subvue/example/table',
          },
          {
            name: 'Tree',
            icon: 'table',
            path: '/subvue/example/tree',
          },
        ],
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
