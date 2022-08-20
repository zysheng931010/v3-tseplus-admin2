import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// 引用路由
import router from "./router/index";
// 引入vuex
import { store, key } from "./store/index";
// 按需引入element-plus组件
import { setupElementComponents } from "./element-plus";
// 引入element-plus图标
import * as Icons from "@element-plus/icons-vue";
import { type } from "os";

const app = createApp(App);
// element-plus图标注册
for (const [key, component] of Object.entries(Icons)) {
  // 动态组件全局注册
  app.component(key, component);
}
// typeof 和 keyof
// const person = {
//   name: "张三",
//   age: 20,
// };
// typeof获取一个对象的类型
// type tp = typeof person;
// keyof获取某种类型的所有键（key）,返回的类型是一个联合类型
// type ky = keyof tp;

// Object.keys(Icons).forEach((key: string) => {
//   app.component(key, Icons[key as keyof typeof Icons]);
//   app.component(key, Icons[key]);
// });

// element-plus组件注册
setupElementComponents(app);
// 路由注册
app.use(router);
// vuex注册
app.use(store, key);
app.mount("#app");
