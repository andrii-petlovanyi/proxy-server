const { createProxyMiddleware } = require("http-proxy-middleware");

const backcountryMiddleware = createProxyMiddleware({
  target: "https://www.backcountry.com/",
  changeOrigin: true,
  pathRewrite: {
    "^/backcountry": "",
  },
});

module.exports = {
  backcountryMiddleware,
};
