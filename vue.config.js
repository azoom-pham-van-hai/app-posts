const path = require("path");
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    optimization: {
      runtimeChunk: "single",
    },
  },
  devServer: {
    proxy: "http://0.0.0.0:8080",
    host: "0.0.0.0",
    allowedHosts: "all",
    static: {
      directory: path.join(__dirname, "src"),
      watch: {
        usePolling: true,
      },
    },
    watchFiles: ["src/*", "public/*"],
    client: {
      logging: "info",
      // adding this line makes app work like a charm
      webSocketURL: "ws://0.0.0.0:8080/ws",
    },
    liveReload: true,
  },
});
