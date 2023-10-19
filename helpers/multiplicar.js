const fs = require("fs");

const crearArchivoTabla = async (base = 5, list = false, to = 10) => {
  try {
    let salida = "";

    for (let i = 1; i <= to; i++) {
      salida += `${base} ${"x"} ${i} = ${base * i}\n`;
    }

    if (list) {
      console.log(salida);
    }

    const nameFile = `tabla-${base}.txt`;
    fs.writeFileSync(`./salida/${nameFile}`, salida);

    return nameFile;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivoTabla,
};
