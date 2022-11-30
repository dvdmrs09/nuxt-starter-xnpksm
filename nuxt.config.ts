// https://v3.nuxtjs.org/api/configuration/nuxt.config
module.exports = {
  build: {
      transpile: [/^@storefront-ui/],
  },
}
export default {
  head: {
    meta: [
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com/",
        crossorigin: "anonymous",
      },
      {
        rel: "preload",
        as: "style",
        href:
          "https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap",
        crossorigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap",
        media: "print",
        onload: "this.media='all'",
      },
    ],
  },
};
