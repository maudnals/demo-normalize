import { imgToCanvasData } from "./utils/utils.canvas";
import { saturation, hue, brightness, color } from "./utils/utils.pixels";

const imgSrcs = [
  require("../assets/img/flashy.jpg"),
  require("../assets/img/photo.jpg"),
  require("../assets/img/liquor.jpg"),
  require("../assets/img/tree.jpg"),
  require("../assets/img/cakes.jpg"),
  require("../assets/img/tree-pink.jpg"),
  require("../assets/img/squares.jpg")
];

const go = () => {
  const img = new Image();
  img.src = imgSrcs[window.currentIndex % imgSrcs.length];

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
  window.currentIndex = 0;
  go();
});

document.addEventListener("keydown", function(event) {
  window.currentIndex++;
  go();
});
