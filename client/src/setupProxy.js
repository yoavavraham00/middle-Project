const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Specify the prefix for API requests
    createProxyMiddleware({
      target: 'http://localhost:8080', // Specify the backend server URL
      changeOrigin: true,
    })
  );
};