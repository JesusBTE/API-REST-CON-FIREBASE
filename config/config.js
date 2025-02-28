// Importamos el módulo 'firebase-admin' para administrar Firebase desde el servidor
const admin = require("firebase-admin");

// Importamos el archivo de configuración con las credenciales de Firebase
const serviceAccount = require("../config/tasks-4afe2-firebase-adminsdk-fbsvc-6c5be679e8.json");

// Inicializamos la aplicación de Firebase con las credenciales de administrador
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount), // Autenticamos usando la clave del servicio
});

// Exportamos la instancia de Firebase para usarla en otros archivos
module.exports = admin;
