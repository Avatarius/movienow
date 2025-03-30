const { defineConfig } = require("vite");

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/vue-deploy/" : "/",
})