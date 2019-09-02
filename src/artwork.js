import { imgToCanvasData } from "./utils/utils.canvas";
import { hue, brightness, saturation, color } from "./utils/utils.pixels";

const imgSrcs = [
  require("../assets/imgs/flashy.jpg"),
  require("../assets/imgs/photo.jpg"),
  require("../assets/imgs/liquor.jpg"),
  require("../assets/imgs/tree.jpg"),
  require("../assets/imgs/cakes.jpg"),
  require("../assets/imgs/tree-pink.jpg"),
  require("../assets/imgs/squares.jpg")
];

function imgIndexGeneratorFactory() {
  const MIN_INDEX = 0;
  const MAX_INDEX = imgSrcs.length - 1;
  let currentImgIndex = MIN_INDEX;
  return keyType => {
    if (keyType === "ArrowRight") {
      currentImgIndex =
        currentImgIndex === MAX_INDEX ? MIN_INDEX : currentImgIndex + 1;
    } else if (keyType === "ArrowLeft") {
      currentImgIndex =
        currentImgIndex === MIN_INDEX ? MAX_INDEX : currentImgIndex - 1;
    }
    return currentImgIndex;
  };
}

const imgIndexGenerator = imgIndexGeneratorFactory();

const go = imgIndex => {
  const img = new Image();
  img.src = imgSrcs[imgIndex];

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

// DOM fully loaded and parsed
document.addEventListener("DOMContentLoaded", () => {
  go(0);
});

document.addEventListener("keydown", function(event) {
  go(imgIndexGenerator(event.key));
});
