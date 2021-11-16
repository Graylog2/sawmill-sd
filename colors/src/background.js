import tinyColor from "tinycolor2";
import gray from "./gray";
import variant from "./variant";

export default {
  content: {
    value: "#fff",
  },
  global: {
    value: "#e8e8e8",
  },
  input: {
    default: {
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
    value: "#e8e8e8",
  },
  table: {
    alt: {
      value: gray[10].value,
    },
    default: {
      value: gray[0].value,
    },
    hover: {
      value: gray[20].value,
    },
    variant: {
      active: {
        default: {
          value: gray[10].value,
        },
        hover: {
          value: gray[20].value,
        },
      },
      danger: {
        default: {
          value: variant.danger.lightest.value,
        },
        hover: {
          value: variant.danger.lighter.value,
        },
      },
      info: {
        default: {
          value: variant.info.lightest.value,
        },
        hover: {
          value: variant.info.lighter.value,
        },
      },
      primary: {
        default: {
          value: variant.primary.lightest.value,
        },
        hover: {
          value: variant.primary.lighter.value,
        },
      },
      success: {
        default: {
          value: variant.success.lightest.value,
        },
        hover: {
          value: variant.success.lighter.value,
        },
      },
      warning: {
        default: {
          value: variant.warning.lightest.value,
        },
        hover: {
          value: variant.warning.lighter.value,
        },
      },
    },
  },
};
