//// El objeto db posee los métodos para conectar con la base de datos. 
// Es la conexión a la base de datos.
const db = require("../db/db.js");

// getAllReserva
const getAllReserva = (req, res) => {
    // Creamos consulta
    const sql = 'SELECT * FROM reserva';
    // Enviamos la consulta a la base de datos
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Ocurrió un error al obtener las reservas' });
        }
        // Si todo sale bien
        res.json(result);
    });
};

// getReservaById
const getReservaById = (req, res) => {
    // Obtener el id del parámetro de la solicitud
    const { id } = req.params;
    const sql = 'SELECT * FROM reserva WHERE id = ?';
    // Enviamos la consulta a la base de datos
    db.query(sql, [id], (err, result) => {
        // Si sucede algún error
        if (err) {
            return res.status(500).json({ error: 'Ocurrió un error al obtener la reserva' });
        }
        // Si todo sale bien
        res.json(result);
    });
};

// createReserva
const createReserva = (req, res) => {
    // Desestructuramos la solicitud
    const { cliente_id, provincia, localidad, fecha, precio } = req.body;
    // Creamos la consulta SQL
    const sql = 'INSERT INTO reserva (cliente_id, provincia, localidad, fecha, precio) VALUES (?, ?, ?, ?, ?)';
    // Enviamos la consulta a la base de datos
    db.query(sql, [cliente_id, provincia, localidad, fecha, precio], (err, result) => {
        // Si sucede algún error
        if (err) {
            return res.status(500).json({ error: 'Ocurrió un error al crear la reserva' });
        }
        // Si todo sale bien
        res.json({ mensaje: "Reserva creada" });
    });
};

// updateReserva
const updateReserva = (req, res) => {
    // Destructuración de la solicitud
    const { id } = req.params;
    const { cliente_id, provincia, localidad, fecha, precio } = req.body;
    // Creamos la consulta SQL
    const sql = 'UPDATE reserva SET cliente_id = ?, provincia = ?, localidad = ?, fecha = ?, precio = ? WHERE id = ?';
    // Enviamos la consulta a la base de datos
    db.query(sql, [cliente_id, provincia, localidad, fecha, precio, id], (err, result) => {
        // Si sucede algún error
        if (err) {
            return res.status(500).json({ error: 'Ocurrió un error al actualizar la reserva' });
        }
        // Si todo sale bien
        res.json({ mensaje: "Reserva actualizada" });
    });
};

// deleteReserva
const deleteReserva = (req, res) => {
    // Destructuración del parámetro de la solicitud
    const { id } = req.params;
    // Consulta SQL para eliminar una reserva por su id
    const sql = 'DELETE FROM reserva WHERE id = ?';
    // Enviamos la consulta a la base de datos
    db.query(sql, [id], (err, result) => {
        // Si sucede algún error
        if (err) {
            return res.status(500).json({ error: 'Ocurrió un error al borrar la reserva' });
        }
        // Si todo sale bien
        res.json({ mensaje: "Reserva borrada" });
    });
};

// Exportamos los módulos
module.exports = {
    getAllReserva,
    getReservaById,
    createReserva,
    updateReserva,
    deleteReserva
};
