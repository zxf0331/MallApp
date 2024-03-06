"use strict";
const common_vendor = require("../../common/vendor.js");
const store_home = require("../../store/home.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Array) {
  const _easycom_tab_control2 = common_vendor.resolveComponent("tab-control");
  _easycom_tab_control2();
}
const _easycom_tab_control = () => "../../components/tab-control/tab-control.js";
if (!Math) {
  (HomeBanner + HomeRecommend + HomePopular + _easycom_tab_control)();
}
const HomeBanner = () => "./cpns/HomeBanner.js";
const HomeRecommend = () => "./cpns/HomeRecommend.js";
const HomePopular = () => "./cpns/home-popular.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const homeStore = store_home.useHomeStore();
    const { banners, recommends } = common_vendor.storeToRefs(homeStore);
    common_vendor.onLoad(() => {
      homeStore.fetchHomeMultiData();
      homeStore.fetchHomeData("pop", 1);
    });
    function handleBannerItemClick(link) {
      common_vendor.index.navigateTo({
        url: "/pages/webview/webview?link=" + link
      });
    }
    function handleTabItemClick(index) {
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleBannerItemClick),
        b: common_vendor.p({
          banners: common_vendor.unref(banners)
        }),
        c: common_vendor.p({
          recommends: common_vendor.unref(recommends)
        }),
        d: common_vendor.o(handleTabItemClick),
        e: common_vendor.p({
          titles: ["流行", "新款", "精选"]
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/learn_uniapp/MallApp/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
