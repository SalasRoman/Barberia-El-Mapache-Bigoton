const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));  // Sirve archivos estáticos como HTML y CSS

// Ruta para registro
app.post('/register', (req, res) => {
  const { nombre, telefono, correo, password } = req.body;
  // Guardar datos en la base de datos
  res.json({ message: 'Cuenta creada con éxito' });
});

// Ruta para inicio de sesión
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Validar datos en la base de datos
  res.json({ message: 'Inicio de sesión exitoso' });
});

// Ruta para agendar cita
app.post('/schedule', (req, res) => {
  const { services, date, time } = req.body;
  // Guardar cita en la base de datos
  res.json({ message: 'Cita agendada con éxito' });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
