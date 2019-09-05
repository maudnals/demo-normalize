import { imgToCanvasData } from "./utils/utils.canvas";
import { hue, brightness, saturation, color } from "./utils/utils.pixels";
import { KEY_NAVIGATE_NEXT, KEY_NAVIGATE_PREVIOUS } from "./config";

const imgSrcs = [
  require("../assets/imgs/DT50.jpg"),
  require("../assets/imgs/flowers2.jpg"),
  require("../assets/imgs/DP279448.jpg"),
  require("../assets/imgs/buzz.jpg"),
  require("../assets/imgs/DT51.jpg"),
  require("../assets/imgs/flowers.jpg"),
  require("../assets/imgs/camb.jpg"),
  require("../assets/imgs/south.jpg"),
  require("../assets/imgs/kirche.jpg"),
  require("../assets/imgs/gipsy.jpg"),
  require("../assets/imgs/japan.jpg"),
  require("../assets/imgs/prisoner.jpg")
];

const PREVIOUS = "previous";
const NEXT = "next";

function imgIndexGeneratorFactory() {
  const MIN_INDEX = 0;
  const MAX_INDEX = imgSrcs.length - 1;
  let currentImgIndex = MIN_INDEX;
  return navDirection => {
    if (navDirection === NEXT) {
      currentImgIndex =
        currentImgIndex === MAX_INDEX ? MIN_INDEX : currentImgIndex + 1;
    } else if (navDirection === PREVIOUS) {
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
    // display image
    const imgElDisplay = document.getElementById("imgForDisplay");
    imgElDisplay.style.backgroundImage = `url(${img.src})`;

    // fill canvas with image data and calculate
    const imgEl = document.getElementById("imgForCalculations");
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
  if (event.key === KEY_NAVIGATE_NEXT || KEY_NAVIGATE_PREVIOUS) {
    const direction = event.key === KEY_NAVIGATE_NEXT ? NEXT : PREVIOUS;
    go(imgIndexGenerator(direction));
  }
});

const buttonNext = document.getElementById("buttonNext");
buttonNext.addEventListener("click", () => {
  go(imgIndexGenerator(NEXT));
});

const buttonPrevious = document.getElementById("buttonPrevious");
buttonPrevious.addEventListener("click", () => {
  go(imgIndexGenerator(PREVIOUS));
});
