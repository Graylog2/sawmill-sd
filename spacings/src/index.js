import { DEFAULT_FONT_SIZE } from "../../typography/src/size";

const SPACE = 0.08; // ratio we use for our calculations
const SIZES = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"];
const FIBONACCI_SKIP = 4; // skipped [0,1,1,2]

const getRem = (fib) => `${(SPACE * fib).toFixed(2)}rem`;
const getPx = (fib) => Math.round(SPACE * fib * DEFAULT_FONT_SIZE);
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
  spacings[size] = { value: getRem(fibonacci[index + FIBONACCI_SKIP]) };
  spacings.px[size] = { value: getPx(fibonacci[index + FIBONACCI_SKIP]) };
});

export default spacings;
