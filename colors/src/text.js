import brand from "./brand";
import gray from "./gray";
import variant from "./variant";

const text = {};

['noir','teint'].forEach((themeName) => {
  text[themeName] = {
    primary: { value: brand[themeName].tertiary.value },
    secondary: { value: brand[themeName].secondary.value },
    link: {
      "@": { value: variant[themeName].primary.base.value },
      hover: { value: variant[themeName].primary.light.value },
    },
    input: {
      "@": { value: gray[themeName][80].value },
      disabled: { value: gray[themeName][60].value },
      error: { value: variant[themeName].danger.dark.value },
      placeholder: { value: gray[themeName][60].value },
    },
  }
});

export default text;
