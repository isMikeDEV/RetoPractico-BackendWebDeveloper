const express = require("express");
const packageSchema = require("../models/package");

const router = express.Router();

// Crear paquetes
router.post('/packages', (req, res) => {
    const package = packageSchema(req.body); // Crear una nueva instancia del modelo Package con los datos del cuerpo de la solicitud
    package
    .save() // Guardar el paquete en la base de datos
    .then((data) => res.json(data)) // Responder con los datos del paquete guardado en formato JSON
    .catch(() => res.json({ message: error})); // Responder con un mensaje de error si ocurre algún problema
});

// Obtener todos los paquetes
router.get('/packages', (req, res) => {
    packageSchema
    .find() // Buscar todos los paquetes en la base de datos
    .then((data) => res.json(data))
    .catch(() => res.json({ message: error}));
});

// Obtener un paquete
router.get('/packages/:id', (req, res) => {
    const { id } = req.params;
    packageSchema
    .findById(id) // Buscar un paquete por su ID en la base de datos
    .then((data) => res.json(data))
    .catch(() => res.json({ message: error}));
});

// Actualizar un paquete
router.put('/packages/:id', (req, res) => {
    const { id } = req.params;
    const { trackingNumber, type, sender, destination} = req.body;
    packageSchema
    .updateOne({ _id: id}, { $set: {trackingNumber, type, sender, destination}}) // Actualizar un paquete por su ID con los datos proporcionados en el cuerpo de la solicitud
    .then((data) => res.json(data))
    .catch(() => res.json({ message: error}));
});

// Eliminar un paquete
router.delete('/packages/:id', (req, res) => {
    const { id } = req.params;
    packageSchema
    .deleteOne({ _id: id}) // Eliminar un paquete por su ID de la base de datos
    .then((data) => res.json(data))
    .catch(() => res.json({ message: error}));
});

module.exports = router;

