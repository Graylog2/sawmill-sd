import tinyColor from "tinycolor2";

import gray from "./gray";
import variant from "./variant";

export default {
  input: {
    "@": { value: gray[30].value },
    disabled: { value: gray[20].value },
    error: { value: variant.danger.light.value },
    focus: { value: variant.info.lighter.value },
  },
  panel: {
    value: gray[20].value,
  },
};
