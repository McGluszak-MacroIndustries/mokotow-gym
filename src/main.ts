import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const width = screen.width;

console.log("szerokosc", width);

const isMobile: boolean = width < 700;

console.log("is mobile?", isMobile);

createApp(App).use(router).mount("#app");
