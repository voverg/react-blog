import {About, Posts, PostIdPage, Login} from 'pages';

export const routeNames = {
  ABOUT: '/react-blog/about/',
  POSTS: '/react-blog/posts/',
  LOGIN: '/react-blog/login/',
}

export const privateRoutes = [
  {path: routeNames.POSTS, component: Posts, exact: true},
  {path: `${routeNames.POSTS}:id`, component: PostIdPage, exact: true},
  {path: routeNames.ABOUT, component: About, exact: false},
];

export const publicRoutes = [
  {path: routeNames.LOGIN, component: Login, exact: true},
];
