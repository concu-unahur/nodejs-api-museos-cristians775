# Interactuando con una API remota

## Instalación

Seguir las instrucciones que se encuentran en el repo [nodejs-primeros-pasos](https://github.com/concu-unahur/nodejs-primeros-pasos).

Si ya tienen Node configurado, lo único que tienen que hacer es ejecutar `npm install` **dentro** del repositorio.

## Consignas

### Escribir en archivo

Escribir los resultados de la request en un archivo llamado `museos.txt`. Debe haber una línea por cada museo, con este formato: `NOMBRE (DIRECCION). Por cualquier consulta comunicarse al TELEFONO`. 

Por ejemplo: 

```
Complejo Histórico Cultural Manzana de las Luces (Perú 222, Ciudad de Buenos Aires). Por cualquier consulta comunicarse al +54 (011) 4342-9930 / 6973
```

En [este archivo](https://github.com/concu-unahur/nodejs-primeros-pasos-faloi/blob/master/archivos.js) tienen un ejemplo de cómo leer un archivo. Para escribirlo van a usar `fs.writeFile`, que tiene similares parámetros.
