<<<<<<< HEAD
// // extern crate math
// // #![feature(use_extern_macros)]

// // #[macro_use]
// // extern crate stdweb;

// // use std::f64;
// // use std::vec;
// // use stdweb::web::UnsafeTypedArray;
// // use 
// // use math::round;

// #[no_mangle]
// pub fn add(a: f64, b: f64) -> f64 {
//   return a + b
// }

// // #[no_mangle]
// // pub fn avg(arr: UnsafeTypedArray<f64>) -> UnsafeTypedArray<f64> {
// //   // let a = vec![4, 5, 6];
// //   // println!("hello there!");
// //   // let sum = arr.iter().fold(0, |acc, x| acc + x);
// //   return arr;
// // }


//   /* nb/arr.len()*/
// /* pub fn saturation(a)

// // const calculator = (rgbaData, f, normalizer = 1) => {
// //   const rgbData = rgbasToRgbs(rgbaData);
// //   const arr = [];
// //   for (let i = 0; i < rgbData.length; i += 3) {
// //     arr.push(f([rgbData[i], rgbData[i + 1], rgbData[i + 2]]));
// //   }
// //   return average(arr) / normalizer;
// // };

// // export const hue = rgbaData => {
// //   return calculator(rgbaData, pixelHue);
// // };

// // export const saturation = rgbaData => {
// //   return calculator(rgbaData, pixelSaturation);
// // };

// // export const average = arr => {
// //   return arr.filter(withoutNaNs).reduce(sum, 0) / arr.length;
// // };*/

use std::f64;

#[no_mangle]
pub fn add(a: f64, b: f64) -> f64 {
  return a + b
}
