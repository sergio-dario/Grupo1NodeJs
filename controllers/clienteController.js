/**
 * El controlador es el que tendrá los cambios más importantes 
 * y es el que hará el tratamiento de la información.
 * En este archivo tenemos que codificar los métodos:
 * - getAllCliente
 * - getClienteById
 * - createCliente
 * - updateCliente
 * - deleteCliente
 */

//// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
const db = require("../db/db.js");

// getAllCliente
const getAllCliente = (req, res) => {
    // Creamos consulta
    const sql = 'SELECT * FROM cliente';
    // Enviamos la consulta a la base de datos
    db.query(sql, (err, result) => {
        if (err) {
            throw err; // Mejor manejar el error de manera adecuada
        }
        // Si todo sale bien
        res.json(result);
    });
};

// getClienteById
const getClienteById = (req, res) => {
    // Obtener el id del parámetro de la solicitud
    const { id } = req.params;
    const sql = 'SELECT * FROM cliente WHERE id = ?';
    // Enviamos la consulta a la base de datos
    db.query(sql, [id], (err, result) => {
        // Si sucede algún error
        if (err) {
            throw err; // Mejor manejar el error de manera adecuada
        }
        // Si todo sale bien
        res.json(result);
    });
};

// createCliente
const createCliente = (req, res) => {
    // Desestructuramos la solicitud
    const { nombre, correo, password } = req.body;
    // Creamos la consulta SQL
    const sql = 'INSERT INTO cliente (nombre, correo, password) VALUES (?, ?, ?)';
    // Enviamos la consulta a la base de datos
    db.query(sql, [nombre, correo, password], (err, result) => {
        // Si sucede algún error
        if (err) {
            throw err; // Mejor manejar el error de manera adecuada
        }
        // Si todo sale bien
        res.json({ mensaje: "Cliente creado" });
    });
};

// updateCliente
const updateCliente = (req, res) => {
    // Destructuración de la solicitud
    const { id } = req.params;
    const { nombre, correo, password } = req.body;
    // Creamos la consulta SQL
    const sql = 'UPDATE cliente SET nombre = ?, correo = ?, password = ? WHERE id = ?';
    // Enviamos la consulta a la base de datos
    db.query(sql, [nombre, correo, password, id], (err, result) => {
        // Si sucede algún error
        if (err) {
            throw err; // Mejor manejar el error de manera adecuada
        }
        // Si todo sale bien
        res.json({ mensaje: "Cliente actualizado" });
    });
};

// deleteCliente
const deleteCliente = (req, res) => {
    // Destructuración del parámetro de la solicitud
    const { id } = req.params;
    // Consulta SQL para eliminar un cliente por su id
    const sql = 'DELETE FROM cliente WHERE id = ?';
    // Enviamos la consulta a la base de datos
    db.query(sql, [id], (err, result) => {
        // Si sucede algún error
        if (err) {
            return res.status(500).json({ error: 'Ocurrió un error al borrar un cliente' });
        }
        // Si todo sale bien
        res.json({ mensaje: "Cliente borrado" });
    });
};

// Exportamos los módulos
module.exports = {
    getAllCliente,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente
};
