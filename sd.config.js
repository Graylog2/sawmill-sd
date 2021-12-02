import StyleDictionary from "style-dictionary";

const buildPath = "theme/src/";

StyleDictionary.extend({
  source: ["**/*.json5"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath,
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
          options: {
            outputReferences: true
          }
        },
        {
          destination: "variables-noir.css",
          format: "css/variables",
          filter: (token) => token.noirValue && token.attributes.category === `color`,
        },
      ],
    },
    js: {
      transformGroup: "web",
      buildPath,
      files: [
        {
          destination: "theme.json",
          format: "json/nested",
        },
      ],
    },
  },
}).buildAllPlatforms();
