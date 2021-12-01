import { DEFAULT_FONT_SIZE } from "../../typography/src/size";

// SETTINGS
const SPACE_RATIO = 0.15; // ratio we use for our calculations
const SIZES = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl", "huge"]; // names of spaces
const FIBONACCI_SKIP = 3; // skipped [0,1,1]
// END SETTINGS

const getRem = (fib) => `${fib.toFixed(2)}rem`;
const getPx = (fib) => Math.round(fib * DEFAULT_FONT_SIZE);
const spacings = { px: { 0: 0, 1: 1 } };

function* fibonacciGenerator(n = null, current = 0, next = 1) {
  if (n === 0) {
    return current;
  }

  let m = n !== null ? n - 1 : null;

  yield current;
  yield* fibonacciGenerator(m, next, current + next);
}

const [...fibonacci] = fibonacciGenerator(SIZES.length + FIBONACCI_SKIP);

SIZES.forEach((size, index) => {
  const fib = SPACE_RATIO * fibonacci[index + FIBONACCI_SKIP];

  spacings[size] = { value: getRem(fib) };
  spacings.px[size] = { value: getPx(fib) };
});

export default spacings;
