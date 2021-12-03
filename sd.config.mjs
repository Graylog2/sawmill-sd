import StyleDictionary from 'style-dictionary';

const buildPath = 'theme/src/';

/**
 * This function will wrap a built-in format and replace `.value` with `.noirValue`
 * if a token has a `.noirValue`.
 * @param {String} format - the name of the built-in format
 * @returns {Function}
 */
function noirFormatWrapper(format) {
  return function(args) {
    const { dictionary } = args;
    // Override each token's `value` with `noirValue`
    dictionary.allTokens = dictionary.allTokens.map(token =>
      token.noirValue ? {...token, value: token.noirValue} : token
    );

    // Use the built-in format but with our customized dictionary object
    // so it will output the noirValue instead of the value
    // @ts-ignore
    return StyleDictionary.format[format]({ ...args, dictionary })
  }
}

StyleDictionary.extend({
  source: ['{colors,elevations,opacity,radii,spacings,typography}/**/*.json'],
  format: {
    cssNoir: noirFormatWrapper('css/variables'),
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
          format: 'cssNoir',
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
}).buildAllPlatforms();
