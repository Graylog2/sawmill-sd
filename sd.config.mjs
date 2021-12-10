import StyleDictionary from "style-dictionary";

const buildPath = "theme/src/";

StyleDictionary.registerFormat({
  name: "css/variables",
  formatter: function({ dictionary, options }) {
    const selector = options.selector ? `.${options.selector}` : `:root`;

    return `${selector} {
      ${dictionary.allProperties
      .map((prop) => {
        let value = options.selector ? prop[`${options.selector}Value`] : prop.value;

        if (options.outputReferences) {
          if (dictionary.usesReference(prop.original.value)) {
            const references = dictionary.getReferences(prop.original.value);

            references.forEach(ref => {
              if (ref.value && ref.name) {
                value = value.replace(ref.value, function() {
                  return `var(--${ref.name})`
                });
              }
            });
          }
        }

        return `  --${prop.name}: ${value};`;
      })
      .join("\n")}
    }`;
  }
});

StyleDictionary.extend({
  source: ["{colors,elevations,opacity,radii,spacings,typography}/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      prefix: "sawmill",
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
          filter: ({ noirValue }) => noirValue,
          options: {
            selector: "noir",
            outputReferences: true
          }
        }
      ]
    },
    js: {
      transformGroup: "web",
      buildPath,
      files: [
        {
          destination: "theme.json",
          format: "json/nested"
        }
      ]
    }
  }
}).buildAllPlatforms();
