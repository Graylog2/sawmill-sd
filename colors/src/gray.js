import { generate } from '@k-vyn/coloralgorithm';
import { THEME_NAMES } from './_constants';

const generatedGrays = generate(
  {
    steps: 8,
    hue: {
      start: 240,
      end: 240,
      curve: 'easeInQuad',
    },
    saturation: {
      start: 0,
      end: 0,
      rate: 0,
      curve: 'easeOutQuad',
    },
    brightness: {
      start: 1,
      end: 0.12,
      curve: 'linear',
    },
  },
  {
    minorSteps: [0, 1],
    provideInverted: true,
  }
);

const gray = {};

THEME_NAMES.forEach((themeName) => {
  gray[themeName] = {};

  generatedGrays.forEach(({ colors }) => {
    colors.forEach((g, i) => {
      let h = g.hue;
      let s = `${(g.saturation * 100).toFixed(2)}%`;
      let l = `${(g.brightness * 100).toFixed(2)}%`;

      gray[themeName][`${Math.round(100 / (colors.length / i))}`] = {
        value: `hsla(${h}, ${s}, ${l}, 1)`,
      };
    });
  });
});

export default gray;
