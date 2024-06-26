// src/routes/reservaRouter.js
/**
 * Enrutador 
 * Endpoints
 */

// 1- Importamos el módulo
const express = require("express");

// 2- Instanciamos Router de express
const router = express.Router();

// 3- Importamos el módulo propio reservaController
const reservaController = require('../controllers/reservaController');

// 4- En reservaController programaremos el módulo junto a métodos GET, POST, PUT, DELETE
// Dejaremos sólo la declaración de las rutas, con sus métodos 
// y el llamado al reservaController con el método específico para cada opción 

// Ruta de listado en general
router.get('/', reservaController.getAllReserva);
// Ruta para la consulta de reservas por id
router.get('/:id', reservaController.getReservaById);
// Ruta para crear una reserva
router.post('/', reservaController.createReserva);
// Ruta para actualizar una reserva
router.put('/:id', reservaController.updateReserva);
// Ruta para borrar una reserva
router.delete('/:id', reservaController.deleteReserva);

// 5- Exportamos el módulo
module.exports = router;
