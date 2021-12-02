const StyleDictionary = require('style-dictionary');
const buildPath = 'theme/src/';

function noirFormatWrapper(format) {
  return function (args) {
    const dictionary = Object.assign({}, args.dictionary);
    // Override each token's `value` with `noirValue`
    dictionary.allProperties = dictionary.allProperties.map((token) => {
      const { noirValue } = token;
      if (noirValue) {
        return Object.assign({}, token, {
          value: noirValue,
        });
      } else {
        return token;
      }
    });

    // Use the built-in format but with our customized dictionary object
    // so it will output the darkValue instead of the value
    return StyleDictionary.format[format]({ ...args, dictionary });
  };
}

StyleDictionary.extend({
  source: [
    '{colors,elevations,opacity,radii,shadows,spacings,typography}/**/*.json5',
  ],
  format: {
    cssNoir: noirFormatWrapper(`css/variables`),
  },
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath,
      prefix: 'sawmill',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
        {
          destination: 'variables-noir.css',
          format: `cssNoir`,
          filter: ({ noirValue }) => noirValue,
          options: {
            outputReferences: true,
          },
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
