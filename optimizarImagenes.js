const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFolder = "./img/";
const outputFolder = "./img2";

// Crear carpeta de salida si no existe
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

fs.readdirSync(inputFolder).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
    const inputPath = path.join(inputFolder, file);
    const outputPath = path.join(outputFolder, `${path.parse(file).name}.webp`);

    sharp(inputPath)
      .toFormat("webp")
      .toFile(outputPath)
      .then(() => console.log(`Convertido: ${file}`))
      .catch((err) => console.error(`Error con ${file}:`, err));
  }
});
