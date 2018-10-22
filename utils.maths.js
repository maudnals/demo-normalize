const withoutNaNs = i => !isNaN(i);

const sum = (a, b) => {
  return a + b;
};

export const average = arr => {
  return arr.filter(withoutNaNs).reduce(sum, 0) / arr.length;
};
