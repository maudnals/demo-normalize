use std::f64;

#[no_mangle]
pub fn add(a: f64, b: f64) -> f64 {
  return a + b
}

/*#[no_mangle]
fn average(arr) -> u8 {
  let nb: u64 = arr.iter().fold(0, |acc, x| acc + x)
  nb/arr.len()
}*/

/* pub fn saturation(a)

// const calculator = (rgbaData, f, normalizer = 1) => {
//   const rgbData = rgbasToRgbs(rgbaData);
//   const arr = [];
//   for (let i = 0; i < rgbData.length; i += 3) {
//     arr.push(f([rgbData[i], rgbData[i + 1], rgbData[i + 2]]));
//   }
//   return average(arr) / normalizer;
// };

// export const hue = rgbaData => {
//   return calculator(rgbaData, pixelHue);
// };

// export const saturation = rgbaData => {
//   return calculator(rgbaData, pixelSaturation);
// };

// export const average = arr => {
//   return arr.filter(withoutNaNs).reduce(sum, 0) / arr.length;
// };*/
