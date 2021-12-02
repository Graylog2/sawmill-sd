import background from './background';
import border from './border';
import brand from './brand';
import gray from './gray';
import shadows from './shadows';
import text from './text';
import variant from './variant';

import { THEME_NAMES } from './_constants';

const colors = {
  transparent: {
    value: 'hsla(0, 0%, 0%, 0)',
  },
};

THEME_NAMES.forEach((themeName) => {
  colors[themeName] = {
    background: background[themeName],
    border: border[themeName],
    brand: brand[themeName],
    gray: gray[themeName],
    shadows: shadows[themeName],
    text: text[themeName],
    variant: variant[themeName],
  };
});

export default colors;
