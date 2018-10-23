import { average } from "./utils.maths";

const MAX_BRIGHTNESS = 255;

const rgbasToRgbs = data => data.filter((n, i) => i === 0 || (i + 1) % 4 !== 0);

const pixelHue = arr => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const [r, g, b] = arr;
  return Math.acos(
    (0.5 * (2 * r - g - b)) / Math.sqrt(Math.pow(r - g, 2) - (r - b) * (g - b))
  );
};

const pixelSaturation = arr => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return (max - min) / max;
};

const pixelBrightness = arr => Math.max(...arr);

const calculator = (rgbaData, f, normalizer = 1) => {
  const rgbData = rgbasToRgbs(rgbaData);
  const arr = [];
  for (let i = 0; i < rgbData.length; i += 3) {
    arr.push(f([rgbData[i], rgbData[i + 1], rgbData[i + 2]]));
  }
  return average(arr) / normalizer;
};

export const hue = rgbaData => {
  return calculator(rgbaData, pixelHue);
};

export const saturation = rgbaData => {
  return calculator(rgbaData, pixelSaturation);
};

export const brightness = rgbaData => {
  return calculator(rgbaData, pixelBrightness, MAX_BRIGHTNESS);
};

export const color = rgbaData => {
  const rgbData = rgbasToRgbs(rgbaData);
  let colors = { r: [], g: [], b: [] };
  for (let i = 0; i < rgbData.length; i += 3) {
    colors.r.push(rgbData[i]);
    colors.g.push(rgbData[i + 1]);
    colors.b.push(rgbData[i + 2]);
  }
  colors = {
    r: Math.round(average(colors.r)),
    g: Math.round(average(colors.g)),
    b: Math.round(average(colors.b))
  };
  return colors;
};
