import { generate } from "@k-vyn/coloralgorithm";

const generatedGrays = generate(
  {
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
  },
  {
    minorSteps: [0, 1],
  }
);

const gray = {};
const grayColors = generatedGrays[0].colors;

grayColors.forEach((g, i) => {
  let h = g.hue;
  let s = `${(g.saturation * 100).toFixed(2)}%`;
  let l = `${(g.brightness * 100).toFixed(2)}%`;
  let a = g.hsl.pop();

  gray[`${Math.round(100 / (grayColors.length / i))}`] = {
    value: `hsla(${h}, ${s}, ${l}, ${a})`,
  };
});

export default gray;
