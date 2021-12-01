import background from "./background";
import border from "./border";
import brand from "./brand";
import gray from "./gray";
import shadows from "./shadows";
import text from "./text";
import variant from "./variant";

export default {
  teint: {
    background:background.teint,
    border: border.teint,
    brand: brand.teint,
    gray: gray.teint,
    shadows: shadows.teint,
    text: text.teint,
    transparent: {
      value: "hsla(0, 0%, 0%, 0)",
    },
    variant: variant.teint,
  },
  noir: {
    background:background.noir,
    border: border.noir,
    brand: brand.noir,
    gray: gray.noir,
    shadows: shadows.noir,
    text: text.noir,
    transparent: {
      value: "hsla(0, 0%, 0%, 0)",
    },
    variant: variant.noir,
  }
};
