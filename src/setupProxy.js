const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://maxifoxy-testfront-12dc.twc1.net/",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
