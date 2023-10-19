const { crearArchivoTabla } = require("./helpers/multiplicar");
const { argv } = require("./config/yargs");
const colors = require("colors");

console.clear();
console.log(argv);

crearArchivoTabla(argv.b, argv.l, argv.t)
  .then((fileName) =>
    console.log(`El Archivo ${fileName} fue creado exitosamente`.green)
  )
  .catch((error) => {
    console.log(
      `Ocurrio un error mientras se intentaba crear el archivo ${error}`.red
    );
  });
