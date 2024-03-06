"use strict";
const common_vendor = require("../common/vendor.js");
const TIME_OUT = 15e3;
const BASE_URL = "http://123.207.32.32:8000/";
class HYRequest {
  request(url, method, data) {
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        url: BASE_URL + url,
        method: method || "GET",
        timeout: TIME_OUT,
        data,
        success(res) {
          resolve(res.data);
        },
        fail(err) {
          reject(err);
        }
      });
    });
  }
  get(url, params2) {
    return this.request(url, "GET", params2);
  }
  post(url, data) {
    return this.request(url, "POST", params);
  }
}
const hyRequest = new HYRequest();
exports.hyRequest = hyRequest;
