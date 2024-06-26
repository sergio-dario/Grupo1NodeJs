// src/server.js
/**
 * Punto principal de acceso al servidor
 */

// 1- Importamos express
const express = require('express');

// 2- Instanciamos express
const app = express();

// 3- Importamos los módulos de rutas
const clienteRoutes = require('../routes/clienteRouter');
const reservaRoutes = require('../routes/reservaRouter');

// 4- Declaramos el puerto
const PORT = 3000; 

// 5- Uso del middleware .json que convierte el cuerpo de solicitud
// en algo accesible por js
app.use(express.json());

// 6- Prefijo principal de las rutas y delegación de las sub-rutas
app.use('/cliente', clienteRoutes);
app.use('/reserva', reservaRoutes);

// 7- Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});

// 8- Pasamos a configurar los routers
