import tinyColor from "tinycolor2";

import variant from "./variant";

export default {
  inputBoxShadow: {
    value: `inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px ${tinyColor(
      variant.info.light.value
    )
      .setAlpha(0.4)
      .toString()}`,
  },
  navigationBoxShadow: {
    value: tinyColor(variant.default.lightest.value).setAlpha(0.5).toString(),
  },
};
