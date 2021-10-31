import {About, Posts, ErrorPage, PostIdPage} from '../pages';

export const routes = [
  {path: '/', component: About, exact: true},
  {path: '/posts', component: Posts, exact: true},
  {path: '/posts/:id', component: PostIdPage, exact: true},
  {path: '/about', component: About, exact: false},
  {path: '/error', component: ErrorPage, exact: false},
];
