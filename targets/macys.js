const { createProxyMiddleware } = require("http-proxy-middleware");

const macysMiddleware = createProxyMiddleware({
  target: "https://www.macys.com/",
  changeOrigin: true,
  pathRewrite: {
    "^/macys": "",
  },
});

module.exports = {
  macysMiddleware,
};
