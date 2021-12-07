import { Alert } from './alert';
import { Button } from './button';

import themeJson from './theme/src/theme.json';
import themeCss from './theme/src/variables.css';
import themeNoirCss from './theme/src/variables-noir.css';

export const components = {
  Alert,
  Button,
};

export const theme = {
  json: themeJson,
  css: {
    base: themeCss,
    noir: themeNoirCss,
  },
  styles: `:root {
    ${themeCss}
  }

  @media (prefers-color-scheme: dark) {
    :root {
      ${themeNoirCss}
    }
  }`,
};
