import button from "./button.vue"
import loading from "./loading"
import toast from "./toast"
import Vue from "vue"
Vue.use(loading);
Vue.use(toast);
Vue.component("m-button",button);
