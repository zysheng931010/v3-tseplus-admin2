import {
  ElContainer,
  ElMenu,
  ElIcon,
  ElBreadcrumb,
  ElTabs,
} from "element-plus";
import "element-plus/dist/index.css";
const components = [ElContainer, ElMenu, ElIcon, ElBreadcrumb, ElTabs];

export const setupElementComponents = (app: any) => {
  components.forEach((component) => {
    app.use(component);
  });
};
