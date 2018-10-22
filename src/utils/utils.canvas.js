export const imgToCanvasData = img => canvasToCanvasData(drawImgOnCanvas(img));

const drawImgOnCanvas = img => {
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  canvas.getContext("2d").drawImage(img, 0, 0, img.width, img.height);
  return canvas;
};

const canvasToCanvasData = canvas =>
  canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height).data;
