// store.ts
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { ITab } from "./type/index";

// 接口是一种规范
export interface State {
  count: number;
  collapse: boolean;
  tabsList: Array<ITab>;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
    collapse: false,
    tabsList: [],
  },
  getters: {
    getCount(state: State) {
      return state.count;
    },
    // 获取collapse
    getCollapse: (state: State) => {
      return state.collapse;
    },
    // 获取tabsList
    getTabsList: (state: State) => {
      return state.tabsList;
    },
  },
  mutations: {
    // 设置count
    setCount(state: State, num: number) {
      state.count = num;
    },
    // 设置collapse
    setCollapse: (state: State, collapse: boolean) => {
      state.collapse = collapse;
    },
    // 设置 tabsList
    setTabsList: (state: State, tabArr: ITab[]) => {
      state.tabsList = tabArr;
    },
  },
  actions: {
    // 添加tab
    addTabs(context: any, tabObj: ITab) {
      // 判断tabsList里是否已经存在tab，不存在才加入tab
      if (context.state.tabsList.some((itm: ITab) => itm.path === tabObj.path))
        return;
      context.state.tabsList.push(tabObj);
    },
  },
});

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key);
}
