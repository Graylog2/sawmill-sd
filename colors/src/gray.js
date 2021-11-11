import { generate } from "@k-vyn/coloralgorithm";

const gray = {};

const generatedGrays = generate({
  steps: 8,
  hue: {
    start: 240,
    end: 240,
    curve: "easeInQuad",
  },
  saturation: {
    start: 0,
    end: 0,
    rate: 0,
    curve: "easeOutQuad",
  },
  brightness: {
    start: 1,
    end: 0.12,
    curve: "linear",
  },
});

generatedGrays[0].colors.forEach((g, i) => {
  // clear out muddy grays
  if (i === 4 || i === 5 || i === 6) return;

  gray[`${i * 10}`] = {
    value: g.hex,
  };
});

export default gray;
