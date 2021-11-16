import StyleDictionary from "style-dictionary";

StyleDictionary.extend({
  source: ["colors/tokens.js"],
  platforms: {
    css: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "size/rem",
        "color/hsl",
      ],
      // prefix: "sawmill",
      buildPath: "colors/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
    js: {
      transformGroup: "web",
      buildPath: "colors/",
      files: [
        {
          destination: "theme.json",
          format: "json/nested",
        },
      ],
    },
  },
}).buildAllPlatforms();
