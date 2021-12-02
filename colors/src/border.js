import gray from "./gray";
import variant from "./variant";
import {THEME_NAMES} from './_constants';

const border = {};

THEME_NAMES.forEach((themeName) => {
  border[themeName] = {
    input: {
      "@": { value: gray[themeName][30].value },
      disabled: { value: gray[themeName][20].value },
      error: { value: variant[themeName].danger.light.value },
      focus: { value: variant[themeName].info.lighter.value },
    },
    panel: {
      value: gray[themeName][20].value,
    },
  }
});

export default border;
