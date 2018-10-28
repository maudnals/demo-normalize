import { imgToCanvasData } from "./utils/utils.canvas";
import { hue, brightness, saturation, color } from "./utils/utils.pixels";
import { add } from "./math.rs";

const imgSrcs = [
  require("../assets/imgs/flashy.jpg"),
  require("../assets/imgs/photo.jpg"),
  require("../assets/imgs/liquor.jpg"),
  require("../assets/imgs/tree.jpg"),
  require("../assets/imgs/cakes.jpg"),
  require("../assets/imgs/tree-pink.jpg"),
  require("../assets/imgs/squares.jpg")
];

console.log(add(1, 20));

let currentImgIndex = 0;

const go = currentImgIndex => {
  const img = new Image();
  img.src = imgSrcs[currentImgIndex % imgSrcs.length];

  img.addEventListener("load", () => {
    const imgEl = document.getElementById("my-img");
    imgEl.src = img.src;

    const data = imgToCanvasData(imgEl);
    const s = saturation(data);
    const b = brightness(data);
    const h = hue(data);
    const c = color(data);

    const event = new CustomEvent("calculationDone", {
      detail: {
        hue: h,
        brightness: b,
        saturation: s,
        colors: c
      }
    });
    document.dispatchEvent(event);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  // DOM fully loaded and parsed
  go(currentImgIndex);
});

document.addEventListener("keydown", function(event) {
  currentImgIndex++;
  go(currentImgIndex);
});
