import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "../node_modules/font-awesome/css/font-awesome.css";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

// eslint-disable-next-line prettier/prettier
createApp(App).use(store).use(router).mount("#app");