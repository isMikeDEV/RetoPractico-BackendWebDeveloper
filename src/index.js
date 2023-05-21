const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); //variables de entorno
const packageRoutes = require("./routes/package");

const app = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(express.json()); // Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use('/api', packageRoutes); // Usar las rutas definidas en el archivo "package.js" para manejar las solicitudes a "/api/packages"

// Rutas
app.get('/', (req, res) => {
    res.send("Funcionando...");
});

// Conexión a MongoDB
mongoose
    .connect(process.env.MONGODB_URI)  // Conectar a la base de datos MongoDB utilizando la URL especificada en la variable de entorno "MONGODB_URI"
    .then(() => console.log('Connected to MongoDB Atlas')) // Mensaje de éxito cuando la conexión se establece correctamente
    .catch((error) => console.error(error))  // Mensaje de error si hay un problema al conectarse a la base de datos

// Iniciar el servidor
app.listen(port, () => console.log("server listening on port", port)); // Iniciar el servidor y escuchar en el puerto especificado




