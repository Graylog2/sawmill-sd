import themeJson from './theme/src/theme.json';
import themeRootCss from './theme/src/variables.css';
import themeNoirCss from './theme/src/variables-noir.css';

export * from './button/src/types';

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

export { Alert } from './alert';
export { Button } from './button';
