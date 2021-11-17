import StyleDictionary from "style-dictionary";

const buildPath = "theme/src/";

StyleDictionary.extend({
  source: ["theme/tokens.js"],
  platforms: {
    css: {
      transformGroup: "css",
      // prefix: "sawmill",
      buildPath,
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
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
