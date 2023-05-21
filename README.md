# RetoPractico-BackendWebDeveloper

API de Gestión de Paquetes

Esta API permite gestionar paquetes y su transporte. Proporciona endpoints para crear, obtener, actualizar y eliminar paquetes.
Rutas

    GET /api/packages: Obtiene todos los paquetes existentes.
    POST /api/packages: Crea un nuevo paquete. Debe proporcionarse la información del paquete en el cuerpo de la solicitud en formato JSON.
    GET /api/packages/:id: Obtiene un paquete específico según su ID.
    PUT /api/packages/:id: Actualiza un paquete específico según su ID. Debe proporcionarse la información actualizada del paquete en el cuerpo de la solicitud en formato JSON.
    DELETE /api/packages/:id: Elimina un paquete específico según su ID.

Recursos
Paquete (Package)

Un paquete representa un que se transporta a través de diferentes medios. Tiene los siguientes campos:

    trackingNumber (String, requerido, único): Número de seguimiento del paquete.
    type (String, requerido): Tipo de transporte utilizado para el paquete (aéreo, marino, terrestre).
    sender (String, requerido): Remitente del paquete.
    destination (String, requerido): Destino del paquete.
