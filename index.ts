import themeJson from './theme/src/styled-components.json';
import themeRootCss from './theme/src/variables.css';
import themeNoirCss from './theme/src/variables-noir.css';

export type { TButtonVariantKeys } from './button/src/types';

export const tokens = {
  json: themeJson,
  css: {
    root: themeRootCss,
    noir: themeNoirCss,
  },
  styles: `
${themeRootCss}
${themeNoirCss}
  `,
};

export { Button } from './button';
