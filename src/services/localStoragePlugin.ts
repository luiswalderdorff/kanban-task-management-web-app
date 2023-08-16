import { State } from "./../types";
import { Store } from "vuex";

// TODO: How does this work exactly?
export const localStoragePlugin = (store: Store<State>) => {
  store.subscribe((mutation, state: State) => {
    localStorage.setItem("state", JSON.stringify(state));
  });
};
