import StyleDictionary from 'style-dictionary';

const buildPath = 'theme/src/';

export default {
  source: ['{colors,elevations,opacity,radii,spacings,typography}/**/*.json'],
  format: {
    cssNoir: (args) => {
      const dictionary = Object.assign({}, args.dictionary);
      // Override each token's `value` with `noirValue`
      dictionary.allTokens = dictionary.allTokens.map((token) => {
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
    },
  },
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
            outputReferences: true,
          },
        },
        {
          destination: 'variables-noir.css',
          format: `cssNoir`,
          filter: ({ noirValue }) => noirValue,
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
};
