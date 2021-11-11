import tinyColor from "tinycolor2";

import global from "./global";
import gray from "./gray";
import variant from "./variant";

export default {
  background: { value: global.contentBackground.value },
  backgroundDisabled: {
    value: tinyColor(global.contentBackground.value).darken(25).toString(),
  },
  border: { value: variant.default.light.value },
  borderFocus: { value: variant.info.light.value },
  color: { value: global.textDefault.value },
  colorDisabled: { value: gray[70].value },
  placeholder: { value: gray[70].value },
};
