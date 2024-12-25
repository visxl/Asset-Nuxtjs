import { defineNuxtPlugin } from "#imports";
import { shallowRef } from "vue";
import { modalInjectionKey } from "../composables/useModal.js";
export default defineNuxtPlugin((nuxtApp) => {
  const modalState = shallowRef({
    component: "div",
    props: {}
  });
  nuxtApp.vueApp.provide(modalInjectionKey, modalState);
});
