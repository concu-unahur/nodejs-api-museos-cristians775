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

superagent
  .get("https://www.cultura.gob.ar/api/v2.0/museos")
  .query({ format: "json" })
  .end((err, res) => {
    const nombres = res.body.results.map(e =>`${e.nombre}. Por cualquier consulta comunicarse al ${e.telefono}`);
   console.log(nombres)
    fs.writeFile('museos.txt',nombres.join('\n'),(e)=>{});
   
  });

console.log("Después de llamar a superagent");



