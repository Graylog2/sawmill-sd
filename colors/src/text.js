import brand from "./brand";
import gray from "./gray";
import variant from "./variant";

export default {
  primary: { value: brand.tertiary.value },
  secondary: { value: brand.secondary.value },
  link: {
    default: { value: variant.primary.base.value },
    hover: { value: variant.primary.light.value },
  },
  input: {
    default: { value: gray[80].value },
    disabled: { value: gray[60].value },
    error: { value: variant.danger.dark.value },
    placeholder: { value: gray[60].value },
  },
};
