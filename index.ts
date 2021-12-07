import { Alert } from './alert';
import { Button } from './button';

import themeJson from './theme/src/theme.json';
import themeCss from './theme/src/variables.css';
import themeNoirCss from './theme/src/variables-noir.css';

export default {
  components: {
    Alert,
    Button,
  },
  theme: {
    json: themeJson,
    css: themeCss,
    noir: themeNoirCss,
  },
};
