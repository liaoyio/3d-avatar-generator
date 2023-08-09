import { createApp } from "vue";
import { createPinia } from "pinia";
import "minireset.min.css";
import "./global.scss";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);

app.mount("#app");
