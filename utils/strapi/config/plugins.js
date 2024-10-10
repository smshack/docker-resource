module.exports = () => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
    },
  },
  "custom-api": {
    enabled: true,
  },
  "file-system": {
    enabled: true,
  },
  //   https://market.strapi.io/plugins/strapi-plugin-file-system
  "wysiwyg-react-md-editor": {
    enabled: true,
    config: {
      toolbarCommands: ["title1", "strapiMediaLibrary"],
    },
  },
  "models-relation-diagram": {
    enabled: true,
    config: {
      defaultExcludeAdmin: true, // hide admin:: + strapi:: + webhook + plugin::i18n.locale + plugin::content-releases
      defaultHideUpload: true, // hide plugin::upload.file + plugin::upload.folder
      defaultExcludeComponents: false, // hide components
      defaultLayout: "dagre", // default layout: ELK,Dagre
      defaultEdgesType: "step", // default edge type: straight,step,smoothstep,bezier
      hideMarkers: true, // hide relation marker on edges
    },
  },
});
