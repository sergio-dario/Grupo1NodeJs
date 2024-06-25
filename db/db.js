const mysql = require("mysql2");

// Configuramos la conexión a la base de datos sin especificar la base de datos inicialmente
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    port: 3306
});

// Conexión
connection.connect((err) => {
    // En caso de error
    if (err) {
        console.log("Error de conexión con el servidor: " + err);
        return;
    }
    // En caso de buena conexión
    console.log("Conexión exitosa");

    // Consulta para crear la base de datos
    const sqlCreateDb = 'CREATE DATABASE IF NOT EXISTS arg';
    // Pasamos la consulta a la base de datos
    connection.query(sqlCreateDb, (err, results) => {
        // En caso de error
        if (err) {
            console.log("Error al crear la base de datos: " + err);
            return;
        }
        // Éxito
        console.log("Base de datos: creada/existente/garantizada");

        // Cambiar a la base de datos
        connection.changeUser({ database: "arg" }, (err) => {
            if (err) {
                console.log("Error al cambiar a la base de datos: " + err);
                return;
            }

            // Generamos la consulta para crear la tabla
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS cliente (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nombre VARCHAR(255) NOT NULL,
                    correo VARCHAR(255) NOT NULL,
                    password VARCHAR(255) NOT NULL
                );
            `;

            // Ejecutar la consulta para crear la tabla
            connection.query(createTableQuery, (err, result) => {
                if (err) {
                    console.log("Error al crear la tabla: " + err);
                } else {
                    console.log("Tabla 'cliente' creada o ya existe.");
                }
            });
        });
    });
});

// Exportación del módulo
module.exports = connection;
