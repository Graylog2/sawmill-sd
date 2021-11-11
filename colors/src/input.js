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
  boxShadow: {
    value: `inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px ${tinyColor(
      variant.info.light.value
    )
      .setAlpha(0.4)
      .toString()}`,
  },
  color: { value: global.textDefault.value },
  colorDisabled: { value: gray[70].value },
  placeholder: { value: gray[70].value },
};
