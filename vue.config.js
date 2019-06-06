module.exports = {
  // Global styles to all components
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/styles/colors.scss";
          @import "@/assets/styles/media.scss";
        `
      }
    }
  }
}
