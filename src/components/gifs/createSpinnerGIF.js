import GIF from "gif.js";

const createSpinnerGIF = async () => {
  const gif = new GIF({
    workers: 2,
    quality: 10,
  });

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 100;
  canvas.height = 100;

  for (let i = 0; i < 10; i++) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((i * Math.PI) / 5);

    ctx.beginPath();
    ctx.arc(0, -30, 10, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 122, 255, ${1 - i / 10})`;
    ctx.fill();

    ctx.restore();

    gif.addFrame(canvas, { copy: true, delay: 100 });
  }

  return new Promise((resolve) => {
    gif.on("finished", (blob) => {
      const url = URL.createObjectURL(blob);
      resolve(url); // Retorna a URL do GIF
    });

    gif.render();
  });
};

export default createSpinnerGIF;
