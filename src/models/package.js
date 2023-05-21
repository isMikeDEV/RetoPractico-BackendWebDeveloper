
// Importación del módulo mongoose
const mongoose = require("mongoose");

// Definición del esquema de paquete
const packageSchema = mongoose.Schema({
    trackingNumber: {
        type: String,
        required: true,
        unique: true // El número de seguimiento debe ser único
      },
      type: {
        type: String,
        required: true,
        enum: ['aereo', 'marino', 'terrestre']// El tipo de transporte debe ser uno de los 3 enumerados
      },
      sender: {
        type: String,
        required: true // El remitente es obligatorio
      },
      destination: {
        type: String,
        required: true // El destino es obligatorio
      }
});

// Exportar el modelo de paquete basado en el esquema
module.exports = mongoose.model('Package', packageSchema);