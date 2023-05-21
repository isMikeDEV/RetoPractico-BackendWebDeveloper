## Documentación de la API REST

Esta documentación describe la estructura y los detalles de la API para la gestión de paquetes y transporte.

### Dependencias utilizadas

- `express`: Framework web de Node.js para la creación de aplicaciones web y API.
- `mongoose`: Biblioteca de modelado de objetos de MongoDB para Node.js.
- `dotenv`: Módulo para cargar variables de entorno desde un archivo.`.env`
- `REST Client`: Extensiòn de VS Code enviar solicitudes HTTP directamente desde tu editor de texto y ver las respuestas correspondientes, lo que facilita la prueba y el consumo de tu API.

### Configuración del servidor

- `express`: Se importa el módulo `express` y se crea una instancia de la aplicación utilizando `express()`.
- `dotenv`: Se utiliza para cargar las variables de entorno desde el archivo `.env`.

### Middleware

- `express.json()`: Middleware utilizado para analizar el cuerpo de las solicitudes entrantes en formato JSON.
- `app.use('/api', packageRoutes)`: Middleware para usar las rutas definidas en el archivo `package.js`. Todas las rutas se prefijan con `/api`.

### MongoDB Connection

- `mongoose.connect(process.env.MONGODB_URI)`: Se utiliza para establecer la conexión con la base de datos de MongoDB. La URL de conexión se obtiene de la variable de entorno `MONGODB_URI`.
- `console.log('Connected to MongoDB Atlas')`: Mensaje de éxito cuando se ha establecido la conexión con MongoDB.
- `console.error(error)`: Muestra un mensaje de error si la conexión con MongoDB falla.

### Inicio del servidor

- `app.listen(port)`: Inicia el servidor y lo hace escuchar en el puerto especificado. El puerto se obtiene de la variable de entorno `PORT` o se usa el puerto 9000 de forma predeterminada.
- `console.log("server listening on port", port)`: Muestra un mensaje en la consola indicando que el servidor está escuchando en el puerto especificado.

### Archivo `package.js`

- Este archivo contiene las rutas relacionadas con la gestión de paquetes y transporte. Las rutas son utilizadas por `app.use('/api', packageRoutes)` en el archivo principal.
- Las rutas implementadas son `GET /api/packages`, `POST /api/packages`, `GET /api/packages/:id`, `PUT /api/packages/:id` y `DELETE /api/packages/:id`. Cada ruta corresponde a una acción específica en la gestión de paquetes.

### Variables de entorno

- `PORT`: Variable de entorno que define el puerto en el que se ejecutará el servidor. Si no se proporciona, se utiliza el puerto 9000 de forma predeterminada.
- `MONGODB_URI`: Variable de entorno que contiene la URL de conexión para la base de datos de MongoDB.

Recuerda que para utilizar la aplicación correctamente, debes crear un archivo `.env` en el mismo directorio que el archivo principal y configurar las variables de entorno adecuadamente.Posteriormente realizar el testeo de peticiones por medio de REST Client

