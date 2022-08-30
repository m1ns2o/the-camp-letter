import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "vue-fullpage.js/dist/style.css";
// import "./fullpage.scrollHorizontally.min"; // Optional. When using fullpage extensions
import VueFullPage from "vue-fullpage.js";

loadFonts();

createApp(App).use(router).use(vuetify).use(VueFullPage).mount("#app");
