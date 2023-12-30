const { createProxyMiddleware } = require("http-proxy-middleware");

const yooxMiddleware = createProxyMiddleware({
  target: "https://www.yoox.com/",
  changeOrigin: true,
  pathRewrite: {
    "^/yoox": "",
  },
  onProxyReq: function (proxyReq) {
    proxyReq.setHeader(
      "User-Agent",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    );
  },
});

module.exports = {
  yooxMiddleware,
};
