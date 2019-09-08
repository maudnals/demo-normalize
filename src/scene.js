import * as t from "three";

const windowWidth = window.innerWidth;

const breakpointInPx = parseInt(
  getComputedStyle(document.body).getPropertyValue("--breakpoint-px")
);

const scene = new t.Scene();

const renderer = new t.WebGLRenderer();

let ratio = 0;

if (windowWidth < breakpointInPx) {
  ratio = (window.innerWidth / window.innerHeight) * 2;
  renderer.setSize(window.innerWidth, window.innerHeight / 2);
} else {
  ratio = window.innerWidth / 2 / window.innerHeight;
  renderer.setSize(window.innerWidth / 2, window.innerHeight);
}

const camera = new t.PerspectiveCamera(75, ratio, 0.1, 1000);
camera.position.z = 4;

document.body.appendChild(renderer.domElement);

const light = new t.DirectionalLight(0xfdfdfd, 2);
// set the position of the light and it shines into the origin
light.position.set(2, 2, 1).normalize();
scene.add(light);

const material = new t.MeshPhongMaterial({
  specular: 0xfdfdfd,
  color: new t.Color("rgb(255, 0, 0)"),
  // dark
  emissive: 0x8c2317,
  wireframe: false
});

const geometry = new t.BoxGeometry(1, 1, 1);
const cube = new t.Mesh(geometry, material);
scene.add(cube);

document.addEventListener("calculationDone", function(event) {
  const { colors, saturation, hue } = event.detail;

  console.log(hue);

  scene.background = new t.Color(
    `rgb(${Math.round(colors.r * 1.1)}, ${Math.round(
      colors.g * 1.1
    )}, ${Math.round(colors.b * 1.1)})`
  );

  console.log(`rgb(${colors.r}, ${colors.g}, ${colors.b})`);

  cube.material = new t.MeshPhongMaterial({
    specular: new t.Color("rgb(0, 50, 170)"),
    color: new t.Color(`rgb(${colors.r}, ${colors.g}, ${colors.b})`),
    // emissive: 0x8c2317,
    wireframe: false
  });
  window.speed = saturation / 8;
});

const animate = () => {
  requestAnimationFrame(animate);
  if (cube) {
    cube.rotation.x += window.speed || 0.01;
    cube.rotation.y += window.speed || 0.01;
    renderer.render(scene, camera);
  }
};
animate();
