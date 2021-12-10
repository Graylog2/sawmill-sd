import { Alert } from './alert';
import { Button } from './button';

import themeJson from './theme/src/theme.json';
import themeRootCss from './theme/src/variables.css';
import themeNoirCss from './theme/src/variables-noir.css';

export const components = {
  Alert,
  Button,
};

export const theme = {
  json: themeJson,
  css: {
    root: themeRootCss,
    noir: themeNoirCss,
  },
};
