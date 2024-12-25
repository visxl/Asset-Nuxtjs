import { useSSRContext, defineComponent, ref, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, computed, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { c as cn } from './utils-H80jjgLf.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-C2l_K5e8.mjs';
import 'clsx';
import 'tailwind-merge';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'highcharts';
import '@vueuse/core';
import '@iconify/vue';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "rounded-xl border bg-card text-card-foreground shadow",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/Card.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CardHeader",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("flex flex-col gap-y-1.5 p-6", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/CardHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CardContent",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("p-6 pt-0", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/card/CardContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Chart",
  __ssrInlineRender: true,
  setup(__props) {
    let data = ref([
      16,
      18.2,
      23.1,
      27.9,
      32.2,
      36.4,
      39.8,
      38.4,
      35.5,
      29.2,
      22,
      17.8
    ]);
    let categories = ref({
      today: ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
      week: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      month: [],
      // Now explicitly typed as string[]
      year: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    });
    let currentCategory = ref("today");
    const options = computed(() => ({
      chart: {
        type: "line",
        animation: {
          enabled: false
        }
      },
      legend: {
        enabled: false
      },
      title: {
        text: ""
      },
      xAxis: {
        gridLineColor: "transparent",
        categories: categories.value[currentCategory.value]
      },
      yAxis: {
        gridLineColor: "transparent",
        title: {
          text: ""
        }
      },
      plotOptions: {
        line: {
          marker: {
            enabled: false
          },
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: true
        }
      },
      series: [{
        name: "line",
        lineWidth: "4px",
        color: {
          linearGradient: {},
          stops: [
            [0, "rgba(252, 176, 69, 1)"],
            [0.33, "rgba(253, 29, 29, 1)"],
            [0.66, "rgba(131, 58, 180, 1)"],
            [1, "rgba(29, 217, 83, 1)"]
          ]
        },
        data: data.value
      }]
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_highchart = resolveComponent("highchart");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}>`);
      if (unref(data).length) {
        _push(ssrRenderComponent(_component_highchart, {
          options: unref(options),
          class: "lg:w-full sm:w-[400px]"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chart.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const items = ref([
      {
        title: "Office Asset",
        description: "List Asset",
        path: "/asset"
      },
      {
        title: "Supplier",
        description: "List Supplier",
        path: "/supplier"
      },
      {
        title: "Transaction",
        description: "List Transaction",
        path: "/transactions"
      },
      {
        title: "Contacts",
        description: "NA",
        path: "/contacts"
      },
      {
        title: "Account",
        description: "NA",
        path: "/account"
      },
      {
        title: "Settings",
        description: "NA",
        path: "/settings"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardContent = _sfc_main$2;
      const _component_Card = _sfc_main$4;
      const _component_CardHeader = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Chart = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid w-full gap-2" }, _attrs))}><header class="flex items-start justify-between"><div class="grow"><p>Hello, Welcome back \${user.name}</p><h1>Dashboard</h1></div></header><main class="grid gap-4"><section>`);
      _push(ssrRenderComponent(_component_CardContent, { class: "flex flex-col gap-4 lg:flex-row" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(items), (item, index) => {
              _push2(ssrRenderComponent(_component_Card, {
                class: "w-full h-[200px] bg-gray-50 dark:bg-gray-900",
                href: item.path,
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CardHeader, { class: "flex items-center" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h2 class="dark:text-gray-200"${_scopeId3}>${ssrInterpolate(item.title)}</h2>`);
                        } else {
                          return [
                            createVNode("h2", { class: "dark:text-gray-200" }, toDisplayString(item.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_CardContent, { class: "flex justify-center" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<p class="dark:text-gray-400"${_scopeId3}>${ssrInterpolate(item.description)}</p>`);
                        } else {
                          return [
                            createVNode("p", { class: "dark:text-gray-400" }, toDisplayString(item.description), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="flex items-center justify-center pt-5"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      href: item.path,
                      class: "px-3 py-1 text-gray-900 transition-transform duration-300 transform border-2 rounded-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 hover:scale-110 hover:bg-gray-100"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` See More `);
                        } else {
                          return [
                            createTextVNode(" See More ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode(_component_CardHeader, { class: "flex items-center" }, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "dark:text-gray-200" }, toDisplayString(item.title), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_CardContent, { class: "flex justify-center" }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "dark:text-gray-400" }, toDisplayString(item.description), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("div", { class: "flex items-center justify-center pt-5" }, [
                        createVNode(_component_NuxtLink, {
                          href: item.path,
                          class: "px-3 py-1 text-gray-900 transition-transform duration-300 transform border-2 rounded-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 hover:scale-110 hover:bg-gray-100"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" See More ")
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, index) => {
                return openBlock(), createBlock(_component_Card, {
                  class: "w-full h-[200px] bg-gray-50 dark:bg-gray-900",
                  href: item.path,
                  key: index
                }, {
                  default: withCtx(() => [
                    createVNode(_component_CardHeader, { class: "flex items-center" }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "dark:text-gray-200" }, toDisplayString(item.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_CardContent, { class: "flex justify-center" }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "dark:text-gray-400" }, toDisplayString(item.description), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode("div", { class: "flex items-center justify-center pt-5" }, [
                      createVNode(_component_NuxtLink, {
                        href: item.path,
                        class: "px-3 py-1 text-gray-900 transition-transform duration-300 transform border-2 rounded-md dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 hover:scale-110 hover:bg-gray-100"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" See More ")
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ])
                  ]),
                  _: 2
                }, 1032, ["href"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section>`);
      _push(ssrRenderComponent(_component_Card, { class: "dark:bg-gray-900" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1${_scopeId2}>Chart</h1>`);
                } else {
                  return [
                    createVNode("h1", null, "Chart")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Chart, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, null, {
                default: withCtx(() => [
                  createVNode("h1", null, "Chart")
                ]),
                _: 1
              }),
              createVNode(_component_Chart)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section></main><footer></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D4ZdfA1F.mjs.map
