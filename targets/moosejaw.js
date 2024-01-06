const { createProxyMiddleware } = require("http-proxy-middleware");

const moosejawMiddleware = createProxyMiddleware({
  target: "https://www.moosejaw.com/",
  changeOrigin: true,
  pathRewrite: {
    "^/moosejaw": "",
  },
});

module.exports = {
  moosejawMiddleware,
};
