import { State } from "./../types";
import { Store } from "vuex";

export const localStoragePlugin = (store: Store<State>) => {
  store.subscribe((mutation, state: State) => {
    localStorage.setItem("state", JSON.stringify(state));
  });
};
