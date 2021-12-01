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
}, {
  provideInverted: true
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
    provideInverted: true,
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
}, {
  provideInverted: true
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
}, {
  provideInverted: true
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
}, {
  provideInverted: true
});

const getLightest = (generatedColors) => generatedColors.colors[0].hex;
const getLighter = (generatedColors) => generatedColors.colors[2].hex;
const getLight = (generatedColors) => generatedColors.colors[4].hex;
const getBase = (generatedColors) => generatedColors.colors[7].hex;
const getDark = (generatedColors) => generatedColors.colors[8].hex;
const getDarker = (generatedColors) => generatedColors.colors[10].hex;
const getDarkest = (generatedColors) => generatedColors.colors[12].hex;

console.log({dangerColors});

const base = {
  danger: dangerColors,
  info: infoColors,
  primary: primaryColors,
  success: successColors,
  warning: warningColors,
};

const variant = {};

['noir', 'teint'].forEach((themeName) => {
  variant[themeName] = {}

  Object.keys(base).map((type) => {

    variant[themeName][type] = {};

    const colors = base[type][themeName === 'noir' ? 1 : 0];

    variant[themeName][type].lightest = { value: getLightest(colors) };
    variant[themeName][type].lighter = { value: getLighter(colors) };
    variant[themeName][type].light = { value: getLight(colors) };
    variant[themeName][type].base = { value: getBase(colors) };
    variant[themeName][type].dark = { value: getDark(colors) };
    variant[themeName][type].darker = { value: getDarker(colors) };
    variant[themeName][type].darkest = { value: getDarkest(colors) };

  });
})



export default variant;
