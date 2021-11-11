import tinyColor from "tinycolor2";
import brand from "./brand";
import variant from "./variant";

const bgColor = "#303030";
const linkColor = "#00bc8c";

export default {
  background: { value: "#222" },
  contentBackground: { value: bgColor },
  link: { value: linkColor },
  linkHover: { value: tinyColor(linkColor).darken(10).toString() },
  navigationBackground: { value: bgColor },
  textAlt: { value: brand.secondary.value },
  textDefault: { value: brand.tertiary.value },
};
