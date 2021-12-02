import brand from "./brand";
import gray from "./gray";
import variant from "./variant";
import {THEME_NAMES} from './_constants';

const background = {};

THEME_NAMES.forEach((themeName) => {
  background[themeName] = {
    content: {
      value: brand[themeName].tertiary.value,
    },
    global: {
      value: gray[themeName][10].value,
    },
    input: {
      "@": {
        value: gray[themeName][0].value,
      },
      disabled: {
        value: gray[themeName][20].value,
      },
      error: {
        value: variant[themeName].danger.lighter.value,
      },
      focus: {
        value: gray[themeName][0].value,
      },
    },
    navigation: {
      value: gray[themeName][10].value,
    },
    table: {
      alt: {
        value: gray[themeName][10].value,
      },
      "@": {
        value: gray[themeName][0].value,
      },
      hover: {
        value: gray[themeName][20].value,
      },
      active: {
        "@": {
          value: gray[themeName][10].value,
        },
        hover: {
          value: gray[themeName][20].value,
        },
      },
      danger: {
        "@": {
          value: variant[themeName].danger.lightest.value,
        },
        hover: {
          value: variant[themeName].danger.lighter.value,
        },
      },
      info: {
        "@": {
          value: variant[themeName].info.lightest.value,
        },
        hover: {
          value: variant[themeName].info.lighter.value,
        },
      },
      primary: {
        "@": {
          value: variant[themeName].primary.lightest.value,
        },
        hover: {
          value: variant[themeName].primary.lighter.value,
        },
      },
      success: {
        "@": {
          value: variant[themeName].success.lightest.value,
        },
        hover: {
          value: variant[themeName].success.lighter.value,
        },
      },
      warning: {
        "@": {
          value: variant[themeName].warning.lightest.value,
        },
        hover: {
          value: variant[themeName].warning.lighter.value,
        },
      },
    },
  }
});

export default background
