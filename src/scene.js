import * as t from "three";
import { DEFAULT_ROTATION_SPEED } from "./config";

let STARTED = false;

const rgbArrToRgbStr = arr => `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;

const scene = new t.Scene();
const renderer = new t.WebGLRenderer();

const checkSmallScreen = () =>
  window.innerWidth <
  parseInt(getComputedStyle(document.body).getPropertyValue("--breakpoint-px"));

const ratioF = () =>
  STARTED
    ? checkSmallScreen()
      ? (window.innerWidth / window.innerHeight) * 2
      : window.innerWidth / 2 / window.innerHeight
    : window.innerWidth / window.innerHeight;

const ratio = ratioF();

const rendererSizeF = () =>
  STARTED
    ? checkSmallScreen()
      ? [window.innerWidth, window.innerHeight / 2]
      : [window.innerWidth / 2, window.innerHeight]
    : [window.innerWidth, window.innerHeight];

renderer.setSize(...rendererSizeF());

const camera = new t.PerspectiveCamera(75, ratio, 0.1, 1000);
camera.position.z = 4;
document.body.appendChild(renderer.domElement);

const light = new t.DirectionalLight(0xfdfdfd, 2);
// set the position of the light and it shines into the origin
light.position.set(2, 2, 1).normalize();
scene.add(light);

// create new cube
const geometry = new t.BoxGeometry(2.8, 2.8, 2.8);
const material = new t.MeshPhongMaterial({
  color: new t.Color("rgb(80, 80, 80)")
});
const cube = new t.Mesh(geometry, material);
scene.add(cube);

const updateView = () => {
  if (STARTED) {
    document.getElementById("appIntro").classList.add("undisplayed");
  }
};

document.addEventListener("calculationDone", function(event) {
  if (!STARTED) {
    // todo refactor/improve to avoid intrisic knowledge
    STARTED = true;
    // update only when necessary
    renderer.setSize(...rendererSizeF());
    camera.aspect = ratioF();
    // !important, otherwise view doesn't update
    camera.updateProjectionMatrix();
    updateView();
    cube.geometry = new t.BoxGeometry(1, 1, 1);
  }

  const { brightness, saturation, dominantColors } = event.detail;
  const dominantColorsAsRgbStrs = dominantColors.map(d => rgbArrToRgbStr(d));
  scene.background = new t.Color(dominantColorsAsRgbStrs[2]);
  cube.material = new t.MeshPhongMaterial({
    specular: new t.Color(dominantColorsAsRgbStrs[1]),
    color: new t.Color(dominantColorsAsRgbStrs[0])
    // emissive: new t.Color(dominantColor0),
    // wireframe: randomBoolean()
  });
  scene.add(cube);

  window.speed = saturation / 8;
});

const animate = () => {
  requestAnimationFrame(animate);
  if (cube && renderer) {
    cube.rotation.x += window.speed || DEFAULT_ROTATION_SPEED;
    cube.rotation.y += window.speed || DEFAULT_ROTATION_SPEED;
    renderer.render(scene, camera);
  }
};
animate();
