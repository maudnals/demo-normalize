import { imgToCanvasData } from "./utils/utils.canvas";
import { saturation, hue, brightness, color } from "./utils/utils.pixels";
const imgSrc = require("../assets/img/flashy.jpg");

document.addEventListener("DOMContentLoaded", function(event) {
  // DOM fully loaded and parsed

  const img = new Image();
  img.src = imgSrc;

  img.addEventListener("load", () => {
    const imgEl = document.getElementById("my-img");
    imgEl.src = imgSrc;

    console.log("loaded");
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
});

document.addEventListener("calculationDone", function(event) {});
