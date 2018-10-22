import { imgToCanvasData } from "./utils/utils.canvas";
import { saturation, hue, brightness, color } from "./utils/utils.pixels";

document.addEventListener("DOMContentLoaded", function(event) {
  // DOM fully loaded and parsed
  var imgEl = document.getElementById("my-img");
  const data = imgToCanvasData(imgEl);

  const s = saturation(data);
  console.log(s);

  const b = brightness(data);
  console.log(b);

  const h = hue(data);
  console.log(h);

  const c = color(data);
  console.log(c);
});
