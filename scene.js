import * as t from "three";

const scene = new t.Scene();
const camera = new t.PerspectiveCamera(
  75,
  window.innerWidth / 2 / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 4;

const renderer = new t.WebGLRenderer();
renderer.setSize(window.innerWidth / 2, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new t.DirectionalLight(0xfdfdfd, 2);
// set the position of the light and it shines into the origin
light.position.set(2, 2, 1).normalize();
scene.add(light);

const material = new t.MeshPhongMaterial({
  // light
  specular: 0xd76531,
  // intermediate
  color: new t.Color("rgb(161, 104, 108)"),
  // dark
  emissive: 0x8c2317,
  wireframe: false
});
const geometry = new t.BoxGeometry(1, 1, 1);
// const material = new t.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new t.Mesh(geometry, material);
scene.add(cube);

const animate = speed => {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.005;
  cube.rotation.y += 0.005;
  renderer.render(scene, camera);
};

animate();
