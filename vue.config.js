module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/": {
        target: "https://superheroapi.com/api/10159645997876060/",
        changeOrigin: true,
      },
    },
  },
};
