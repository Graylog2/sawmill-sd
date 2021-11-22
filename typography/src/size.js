// NOTE: you can modify the `DEFAULT_FONT_SIZE` & `FONT_SCALE` for properly scaling fonts
const DEFAULT_FONT_SIZE = 14;
const FONT_SCALE = 1.125; // major second - https://type-scale.com/

const BROWSER_DEFAULT_FONT_SIZE = 16;
const rootPercentage = (DEFAULT_FONT_SIZE / BROWSER_DEFAULT_FONT_SIZE) * 100;
const scaleFont = (power) => Math.pow(FONT_SCALE, power).toFixed(2);
const scaleFontRem = (power) => `calc(1rem * ${scaleFont(power)})`;
const scaleFontPx = (power) =>
  `~${(DEFAULT_FONT_SIZE * scaleFont(power)).toFixed(2)}px`;

const fontSizes = [
  {
    key: "xxs",
    scale: -2,
  },
  {
    key: "xs",
    scale: -1,
  },
  {
    key: "sm",
    scale: 1,
  },
  {
    key: "md",
    scale: 2,
  },
  {
    key: "lg",
    scale: 3,
  },
  {
    key: "xl",
    scale: 4,
  },
  {
    key: "xxl",
    scale: 5,
  },
  {
    key: "huge",
    scale: 8,
  },
];

const sizes = {
  root: {
    value: `${rootPercentage}%`,
    comment: "Set as default `html` font-size in your CSS",
  },
  base: { value: "1rem", comment: "14px" },
};

fontSizes.forEach(({ key, scale }) => {
  sizes[key] = {
    value: scaleFontRem(scale),
    comment: scaleFontPx(scale),
  };
});

export default sizes;
