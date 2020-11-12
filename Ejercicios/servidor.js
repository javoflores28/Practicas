// Servidor en Node.js con la biblioteca “express” que pueda recibir un request POST con el formato json.
// Dependencias
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const rp = require('request-promise');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/', async (req, res) => {
  // req.body es un JSON => req.body es obj de JavaScript
  const obj = req.body;
  // Validación
  // El campo dni es obligatorio
  if (typeof obj.dni === 'undefined') {
    return res.sendStatus(400);
  }
  // Declarar nombre como undefined si el input del campo nombre es un string vacío para enviarlo vacío al hacer POST
  if (typeof obj.nombre === 'string' && obj.nombre.length === 0){
    obj.nombre = undefined;
  }
  // El campo del nombre debe ser de tipo string y es opcional 
  // El campo apellido debe ser de tipo string y es obligatorio 
  if (
    (typeof obj.nombre !== 'string' && typeof obj.nombre !== 'undefined') ||
    typeof obj.apellido !== 'string' || obj.apellido.length === 0
  ) {
    return res.sendStatus(400);
  }
  // El campo dni debe ser numérico de máximo 10 caracteres 
  if (typeof obj.dni !== 'number' || ('' + obj.dni).length > 10) {
    return res.sendStatus(400);
  }
  // Los campos nombre y apellido no deben ser numérico 
  if (!isNaN(parseInt(obj.nombre)) || !isNaN(parseInt(obj.apellido))) {
    return res.sendStatus(400);
  }
  // El usuario no debe mandar más atributos de los mencionados (dni, nombre, apellido)
  const llavesPermitidas = ['dni', 'nombre', 'apellido'];
  const atributosDeMas = Object.keys(obj).filter(
    (k) => !llavesPermitidas.includes(k),
  );
  if (atributosDeMas.length > 0) {
    return res.sendStatus(400);
  }
  // POST a firebaseio
  try {
    const response = await rp(
      'https://reclutamiento-14cf7.firebaseio.com/personas.json',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: obj,
        json: true,
      },
    );
    // Enviar lo que regresó el POST
    res.status(201).send(response);
  } catch (error) {
    // Enviar el error
    res.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});