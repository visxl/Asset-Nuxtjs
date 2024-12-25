import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, defineComponent, ref, resolveComponent, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import __nuxt_component_1 from './index-BwIhvTMx.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-C2l_K5e8.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'highcharts';
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';

const _imports_0 = "" + buildAssetsURL("Logo.CXyR_bmo.png");
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden w-[175px]" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)} alt="logo"></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Logo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Menu",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      {
        title: "Overview",
        path: "/",
        icon: "ri:dashboard-line"
        // Solid icon example
      },
      {
        title: "Transactions",
        path: "/transactions",
        icon: "octicon:arrow-switch-16"
        // Outline icon example
      },
      {
        title: "Account",
        path: "/account",
        icon: "majesticons:user-box-line"
      },
      {
        title: "Contacts",
        path: "/contacts",
        icon: "grommet-icons:contact-info"
      },
      {
        title: "Office Asset",
        path: "/asset",
        icon: "fluent:web-asset-24-regular"
      },
      {
        title: "Settings",
        path: "/settings",
        icon: "mdi:settings-outline"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = resolveComponent("Header");
      const _component_Logo = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Header, { class: "flex items-center gap-2 p-4 hover:scale-[105%] transition cursor-pointer" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Logo, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Logo)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="px-4 grow"><div class="grid gap-2"><!--[-->`);
      ssrRenderList(items.value, (item, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          href: item.path,
          key: index,
          class: "flex items-center gap-2 px-1 py-1 transition-transform duration-300 transform rounded-md cursor-pointer hover:scale-[105%] hover:bg-neutral-100 dark:hover:bg-gray-900"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (item.icon) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: item.icon,
                  size: "20",
                  class: "mr-2 text-gray-900 dark:text-gray-200"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="text-gray-900 dark:text-gray-200"${_scopeId}>${ssrInterpolate(item.title)}</span>`);
            } else {
              return [
                item.icon ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  name: item.icon,
                  size: "20",
                  class: "mr-2 text-gray-900 dark:text-gray-200"
                }, null, 8, ["name"])) : createCommentVNode("", true),
                createVNode("span", { class: "text-gray-900 dark:text-gray-200" }, toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar/Menu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Logo = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_SidebarMenu = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="z-50 flex justify-between w-full h-full p-4 lg:hidden">`);
      _push(ssrRenderComponent(_component_Logo, null, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        class: "top-0 right-0 z-50 cursor-pointer",
        size: "30",
        name: "iconamoon:menu-burger-horizontal",
        onClick: ($event) => isOpen.value = true
      }, null, _parent));
      if (isOpen.value) {
        _push(`<div class="fixed top-0 left-0 z-[999] w-full h-full bg-white dark:bg-gray-800">`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "absolute z-50 cursor-pointer top-3 right-4",
          size: "30",
          name: "material-symbols:close",
          onClick: ($event) => isOpen.value = false
        }, null, _parent));
        _push(ssrRenderComponent(_component_SidebarMenu, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="hidden lg:flex w-[250px] h-screen flex-col justify-between border-r dark:border-gray-700">`);
      _push(ssrRenderComponent(_component_SidebarMenu, null, null, _parent));
      _push(`<div> UserItem </div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Sidebar = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid items-start bg-gray-50 dark:bg-gray-800 lg:flex" }, _attrs))}><div class="shadow-md">`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`</div><div class="flex w-full lg:flex-col"><div class="p-4">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-BNNFoFPg.mjs.map
