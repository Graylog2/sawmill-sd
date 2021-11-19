import modularScale from "modularscale-js";

const BROWSER_DEFAULT_FONT_SIZE = 16;
const DEFAULT_FONT_SIZE = 14;
const FONT_SCALE = 1.125; // major second
const PERCENTAGE = (DEFAULT_FONT_SIZE / BROWSER_DEFAULT_FONT_SIZE) * 100;

// console.log(DEFAULT_FONT_SIZE * FONT_SCALE ** -0.4);

export default {
  root: { value: `${PERCENTAGE}%`, comment: "14px" },
  base: { value: "1rem", comment: "14px" },

  xxs: { value: "0.79rem", comment: "11.06px " },
  xs: { value: "0.889rem", comment: "12.44px" },
  sm: { value: "1.125rem", comment: "15.75px" },
  md: { value: "1.266rem", comment: "17.72px" },
  lg: { value: "1.424rem", comment: "19.93px" },
  xl: { value: "1.602rem", comment: "22.43px" },
  xxl: { value: "1.802rem", comment: "25.23px" },
  huge: { value: "2.027rem", comment: "28.38px" },
};
