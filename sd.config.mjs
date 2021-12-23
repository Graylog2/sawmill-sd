import StyleDictionary from 'style-dictionary';

const buildPath = 'theme/src/';

/**
 * If for any reason you want to build the Style Dictionary outside of Backlight you will need to make a few
 * adjustments.
 *
 * Replace the
 * ```
 * export default { ... }
 * ````
 * with
 * ```
 * styleDictionary.extend({ ... }).buildAllPlatforms();
 * ```
 *
 * Rename this file from `sd.config.js` to `sd.config.mjs` to allow for the modular build instead of CommonJS
 *
 * --
 * For optional build methods, the developer of Style Dictionary updated his methods here with some alternatives we
 * could try https://dbanks.design/blog/dark-mode-with-style-dictionary/#Introduction
 */

StyleDictionary.registerFormat({
  name: 'css/variables',
  formatter: function ({ dictionary, options }) {
    const selector = options.mode
      ? `[data-sawmill-mode="${options.mode}"]`
      : ':root';

    return `${selector} {
      ${dictionary.allProperties
        .map((prop) => {
          let value = options.mode ? prop[`${options.mode}Value`] : prop.value;

          if (options.outputReferences) {
            if (dictionary.usesReference(prop.original.value)) {
              const references = dictionary.getReferences(prop.original.value);

              references.forEach((ref) => {
                if (ref.value && ref.name) {
                  value = value.replace(ref.value, function () {
                    return `var(--${ref.name})`;
                  });
                }
              });
            }
          }

          return `  --${prop.name}: ${value};`;
        })
        .join('\n')}
}`;
  },
});

export default {
  source: [
    '{colors,elevations,opacity,radii,shadows,spacings,typography}/**/*.json',
  ],
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
          format: 'css/variables',
          filter: ({ noirValue }) => noirValue,
          options: {
            mode: 'noir',
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
          destination: 'styled-components.json',
          format: 'json/nested',
        },
      ],
    },
  },
};
