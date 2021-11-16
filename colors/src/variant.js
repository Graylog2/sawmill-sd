const { generate } = require("@k-vyn/coloralgorithm");

const dangerColors = generate({
  steps: 13,
  hue: {
    start: 0,
    end: 0,
    curve: "easeOutQuad",
  },
  saturation: {
    start: 0.17,
    end: 0.92,
    rate: 1,
    curve: "easeOutQuad",
  },
  brightness: {
    start: 1,
    end: 0.35,
    curve: "linear",
  },
});

const infoColors = generate(
  {
    steps: 13,
    hue: {
      start: 219,
      end: 209,
      curve: "easeOutQuad",
    },
    saturation: {
      start: 0.06,
      end: 1,
      rate: 1,
      curve: "easeOutQuad",
    },
    brightness: {
      start: 0.94,
      end: 0.26,
      curve: "easeInQuad",
    },
  },
  {
    rotation: "counterclockwise",
  }
);

const primaryColors = generate({
  steps: 13,
  hue: {
    start: 270,
    end: 286.88,
    curve: "easeOutQuad",
  },
  saturation: {
    start: 0.02,
    end: 0.7,
    rate: 1,
    curve: "easeOutQuad",
  },
  brightness: {
    start: 0.96,
    end: 0.18,
    curve: "linear",
  },
});

const successColors = generate({
  steps: 13,
  hue: {
    start: 127.5,
    end: 143,
    curve: "easeOutQuad",
  },
  saturation: {
    start: 0.03,
    end: 1,
    rate: 1,
    curve: "easeOutQuad",
  },
  brightness: {
    start: 0.97,
    end: 0.24,
    curve: "linear",
  },
});

const warningColors = generate({
  steps: 13,
  hue: {
    start: 41.25,
    end: 42.47,
    curve: "easeOutQuad",
  },
  saturation: {
    start: 0.06,
    end: 1,
    rate: 1,
    curve: "easeOutQuad",
  },
  brightness: {
    start: 0.97,
    end: 0.7,
    curve: "linear",
  },
});

const getLightest = (generatedColors) => generatedColors[0].colors[0].hex;
const getLighter = (generatedColors) => generatedColors[0].colors[2].hex;
const getLight = (generatedColors) => generatedColors[0].colors[4].hex;
const getBase = (generatedColors) => generatedColors[0].colors[7].hex;
const getDark = (generatedColors) => generatedColors[0].colors[8].hex;
const getDarker = (generatedColors) => generatedColors[0].colors[10].hex;
const getDarkest = (generatedColors) => generatedColors[0].colors[12].hex;

const base = {
  danger: dangerColors,
  info: infoColors,
  primary: primaryColors,
  success: successColors,
  warning: warningColors,
};

const variant = {};

Object.keys(base).map((type) => {
  variant[type] = {};

  variant[type].lightest = { value: getLightest(base[type]) };
  variant[type].lighter = { value: getLighter(base[type]) };
  variant[type].light = { value: getLight(base[type]) };
  variant[type].base = { value: getBase(base[type]) };
  variant[type].dark = { value: getDark(base[type]) };
  variant[type].darker = { value: getDarker(base[type]) };
  variant[type].darkest = { value: getDarkest(base[type]) };
});

export default variant;
