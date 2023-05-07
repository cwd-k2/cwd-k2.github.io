export default {
  target: "static",
  app: {
    head: {
      link: [
        { rel: "stylesheet", href: "https://unpkg.com/destyle.css@4.0.0/destyle.css" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" },
      ],
    },
  },
  css: ["~/assets/styles/global.css"],
};
