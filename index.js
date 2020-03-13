const superagent = require("superagent");
const fs = require("fs");
function imprimirMuseos(error, respuesta) {
  if (error) {
    throw new Error("algo se rompió", error);
  }

  const cantidad = respuesta.body.count;
  const museos = respuesta.body.results;

  console.log(`Se encontraron ${cantidad} museos.`);
  console.log(`El primer museo se llama ${museos[0].nombre}.`);
}

console.log("Antes de llamar a superagent");

const getMuseos = next => {
  superagent
    .get("https://www.cultura.gob.ar/api/v2.0/museos")
    .query({ format: "json" })
    .end((err, res) => {
      const nombres = res.body.results.map(
        e => `${e.nombre}. Por cualquier consulta comunicarse al ${e.telefono}`
      );
      next(nombres);
    });
};
const getOrganismos = next => {
  superagent
    .get("https://www.cultura.gob.ar/api/v2.0/organismos")
    .query({ format: "json" })
    .end((err, res) => {
      const nombres = res.body.results.map(
        e => `${e.nombre}. Por cualquier consulta comunicarse al ${e.telefono}`
      );

      next(nombres);
    });
};

const escribirTxt = () => {
  getMuseos(res => {
    getOrganismos(res2 => {
      fs.writeFile(
        "museos-organismos.txt",
        res.concat(res2).join("\n"),
        e => {}
      );
    });
  });
};

escribirTxt();

console.log("Después de llamar a superagent");
