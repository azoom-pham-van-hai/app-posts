import VueRouter from "vue-router";

import Home from "./pages/Home.vue";
import ListPosts from "./pages/ListPosts.vue";
import PostDetail from "./pages/PostDetail.vue";
import CreatePost from "./pages/CreatePost.vue";
import UpdatePost from "./pages/UpdatePost.vue";
import ListMyPosts from "./pages/ListMyPost.vue";
import CreateUser from "./pages/CreateUser.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts",
    name: "ListPosts",
    component: ListPosts,
  },
  {
    path: "/posts/:postId",
    name: "PostDetail",
    component: PostDetail,
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
  },
  {
    path: "/update-post/:postId",
    name: "UpdatePost",
    component: UpdatePost,
  },
  {
    path: "/my-posts",
    name: "ListMyPosts",
    component: ListMyPosts,
  },
  {
    path: "/create-user",
    name: "CreateUser",
    component: CreateUser,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export { router };
