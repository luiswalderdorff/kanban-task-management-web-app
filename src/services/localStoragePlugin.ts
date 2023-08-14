import { Store } from "vuex";

// TODO: How does this work exactly?
export const localStoragePlugin = (store: Store<any>) => {
  store.subscribe((mutation, state: any) => {
    localStorage.setItem("state", JSON.stringify(state));
  });
};
