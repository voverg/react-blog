import {About, Posts, PostIdPage, Login} from '../pages';

export const privateRoutes = [
  {path: '/react-blog/', component: About, exact: true},
  {path: '/react-blog/posts', component: Posts, exact: true},
  {path: '/react-blog/posts/:id', component: PostIdPage, exact: true},
  {path: '/react-blog/about', component: About, exact: false},
];

export const publicRoutes = [
  {path: '/react-blog/login', component: Login, exact: true},
];
