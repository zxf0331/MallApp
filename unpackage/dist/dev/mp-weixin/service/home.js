"use strict";
const service_index = require("./index.js");
const getHomeMultiData = () => {
  return service_index.hyRequest.get("/home/multidata", {});
};
exports.getHomeMultiData = getHomeMultiData;
