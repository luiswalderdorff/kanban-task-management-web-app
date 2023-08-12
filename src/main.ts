import { createApp } from "vue";
import App from "./App.vue";
import createStore from "./state";

createApp(App).use(createStore).mount("#app");
