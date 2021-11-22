import brand from "./brand";
import gray from "./gray";
import variant from "./variant";

export default {
  content: {
    value: brand.tertiary.value,
  },
  global: {
    value: gray[10].value,
  },
  input: {
    "@": {
      value: gray[0].value,
    },
    disabled: {
      value: gray[20].value,
    },
    error: {
      value: variant.danger.lighter.value,
    },
    focus: {
      value: gray[0].value,
    },
  },
  navigation: {
    value: gray[10].value,
  },
  table: {
    alt: {
      value: gray[10].value,
    },
    "@": {
      value: gray[0].value,
    },
    hover: {
      value: gray[20].value,
    },
    active: {
      "@": {
        value: gray[10].value,
      },
      hover: {
        value: gray[20].value,
      },
    },
    danger: {
      "@": {
        value: variant.danger.lightest.value,
      },
      hover: {
        value: variant.danger.lighter.value,
      },
    },
    info: {
      "@": {
        value: variant.info.lightest.value,
      },
      hover: {
        value: variant.info.lighter.value,
      },
    },
    primary: {
      "@": {
        value: variant.primary.lightest.value,
      },
      hover: {
        value: variant.primary.lighter.value,
      },
    },
    success: {
      "@": {
        value: variant.success.lightest.value,
      },
      hover: {
        value: variant.success.lighter.value,
      },
    },
    warning: {
      "@": {
        value: variant.warning.lightest.value,
      },
      hover: {
        value: variant.warning.lighter.value,
      },
    },
  },
};
