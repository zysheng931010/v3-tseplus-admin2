import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/Index.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/layout/dashboard/Index.vue"),
        meta: {
          title: "首页",
          icon: "HomeFilled",
          roles: ["sys:manage"],
        },
        children: [],
      },
    ],
  },
  {
    path: "/system",
    name: "system",
    component: Layout,
    meta: {
      title: "系统管理",
      icon: "Menu",
      roles: ["sys:manage"],
      parentId: 0,
    },
    children: [
      {
        path: "/department",
        name: "department",
        component: () => import("@/views/system/DepartmentView.vue"),
        meta: {
          title: "机构管理",
          icon: "HelpFilled",
          roles: ["sys:dept"],
          parentId: 17,
        },
      },
      {
        path: "/user",
        name: "user",
        component: () => import("@/views/system/UserView.vue"),
        meta: {
          title: "用户管理",
          icon: "Avatar",
          roles: ["sys:dept"],
          parentId: 17,
        },
      },
      {
        path: "/role",
        name: "role",
        component: () => import("@/views/system/RoleView.vue"),
        meta: {
          title: "角色管理",
          icon: "Tools",
          roles: ["sys:role"],
          parentId: 17,
        },
      },
      {
        path: "/permission",
        name: "permission",
        component: () => import("@/views/system/PermissionView.vue"),
        meta: {
          title: "权限管理",
          icon: "Briefcase",
          roles: ["sys:menu"],
          parentId: 17,
        },
      },
    ],
  },
  {
    path: "/goods",
    name: "goods",
    component: Layout,
    meta: {
      title: "商品管理",
      icon: "Management",
      roles: ["sys:goods"],
      parentId: 0,
    },
    children: [
      {
        path: "/goodCategory",
        name: "goodCategory",
        component: () => import("@/views/goods/GoodCategoryView.vue"),
        meta: {
          title: "商品分类",
          icon: "List",
          roles: ["sys:goodCategory"],
          parentId: 34,
        },
      },
    ],
  },
];

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
