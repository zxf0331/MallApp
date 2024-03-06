"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default: () => []
    }
  },
  emits: ["recommendItemClick"],
  setup(__props, { emit: emits }) {
    function recommendItemClick(item) {
      emits("recommendItemClick", item);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.recommends, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.title),
            c: common_vendor.o(($event) => recommendItemClick(item), item),
            d: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/learn_uniapp/MallApp/pages/home/cpns/HomeRecommend.vue"]]);
wx.createComponent(Component);
