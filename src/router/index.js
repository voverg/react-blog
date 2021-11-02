import {About, Posts, PostIdPage, Login} from '../pages';

export const privateRoutes = [
  {path: '/', component: About, exact: true},
  {path: '/posts', component: Posts, exact: true},
  {path: '/posts/:id', component: PostIdPage, exact: true},
  {path: '/about', component: About, exact: false},
];

export const publicRoutes = [
  {path: '/login', component: Login, exact: true},
];
