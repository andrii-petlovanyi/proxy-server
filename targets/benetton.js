const { createProxyMiddleware } = require("http-proxy-middleware");

const benettonMiddleware = createProxyMiddleware({
  target: "https://us.benetton.com/",
  changeOrigin: true,
  pathRewrite: {
    "^/benetton": "",
  },
});

module.exports = {
  benettonMiddleware,
};
