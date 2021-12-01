import tinyColor from "tinycolor2";

import gray from "./gray";
import variant from "./variant";

const shadows = {};

['noir','teint'].forEach((themeName) => {
  shadows[themeName] = {
    input: {
      value: `inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px ${tinyColor(
        variant[themeName].info.light.value
      )
        .setAlpha(0.4)
        .toString()}`,
    },
    navigation: {
      value: tinyColor(gray[themeName][10].value).setAlpha(0.5).toString(),
    },
    panel: {
      value: `0 2px 6px 0 ${tinyColor(gray[themeName][40].value).setAlpha(0.4).toString()}`,
    },
  }
});

export default shadows;
