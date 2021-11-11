import variant from "./variant";
import gray from "./gray";

export default {
  background: { value: gray[10].value },
  backgroundAlt: { value: gray[20].value },
  backgroundHover: { value: gray[30].value },
  variant: {
    danger: { value: variant.danger.lightest.value },
    active: { value: variant.default.lightest.value },
    info: { value: variant.info.lightest.value },
    primary: { value: variant.primary.lightest.value },
    success: { value: variant.success.lightest.value },
    warning: { value: variant.warning.lightest.value },
  },
  variantHover: {
    danger: { value: variant.danger.lighter.value },
    active: { value: variant.default.lighter.value },
    info: { value: variant.info.lighter.value },
    primary: { value: variant.primary.lighter.value },
    success: { value: variant.success.lighter.value },
    warning: { value: variant.warning.lighter.value },
  },
};
