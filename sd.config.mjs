import StyleDictionary from 'style-dictionary';

const buildPath = 'theme/src/';

StyleDictionary.registerFormat({
  name: 'css/variables',
  formatter: function ({ dictionary, options }) {
    return `${options.mode === 'root' ? `:root` : `.${options.mode}`} {
      ${dictionary.allProperties
      .map((prop) => {
        let value = options.mode === 'root' ? prop.value : prop[`${options.mode}Value`];

        if (options.outputReferences) {
          if (dictionary.usesReference(prop.original.value)) {
            const reference = dictionary.getReferences(prop.original.value);

            value = reference[0].name;
            return `  --${prop.name}: var(--${value});`;
          }
        }
        
        return `  --${prop.name}: ${value};`;
      })
      .join('\n')}
    }`;
  },
});

StyleDictionary.extend({
  source: ['{colors,elevations,opacity,radii,spacings,typography}/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'sawmill',
      buildPath,
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            mode: 'root',
            outputReferences: true
          }
        },
        {
          destination: 'variables-noir.css',
          format: 'css/variables',
          filter: ({ noirValue }) => noirValue,
          options: {
            mode: 'noir',
            outputReferences: true
          }
        },
      ],
    },
    js: {
      transformGroup: 'web',
      buildPath,
      files: [
        {
          destination: 'theme.json',
          format: 'json/nested',
        },
      ],
    },
  },
}).buildAllPlatforms();
