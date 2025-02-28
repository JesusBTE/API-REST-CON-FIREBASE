// Importamos la configuración de Firebase Admin
const admin = require("../config/config"); // Asegúrate de que la ruta sea correcta

// Accedemos a Firestore
const db = admin.firestore();
module.exports = db;

// Referencia a la colección "Tasks" en Firestore
const collection = db.collection("Tasks");

class Task {
  // Método para obtener todas las tareas
  static async getAllTasks() {
    const snapshot = await collection.get(); // Obtiene todos los documentos de la colección
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // Devuelve un array con las tareas
  }

  // Método para obtener una tarea por su ID
  static async getTaskById(id) {
    const doc = await collection.doc(id).get(); // Obtiene el documento por ID
    if (!doc.exists) throw new Error("Task not found"); // Si no existe, lanza un error
    return { id: doc.id, ...doc.data() }; // Devuelve la tarea con su ID
  }
  
  // Método para crear una nueva tarea
  static async createTask(taskData) {
    const docRef = await collection.add(taskData); // Agrega una nueva tarea a la colección
    return { id: docRef.id, ...taskData }; // Devuelve la tarea creada con su nuevo ID
  }

  // Método para actualizar una tarea existente
  static async updateTask(id, updatedData) {
    await collection.doc(id).update(updatedData); // Actualiza el documento con el ID proporcionado
    return { id, ...updatedData }; // Devuelve la tarea actualizada
  }

  // Método para eliminar una tarea
  static async deleteTask(id) {
    await collection.doc(id).delete(); // Elimina la tarea por ID
    return { id, message: "Task deleted" }; // Mensaje de confirmación
  }
}

// Exportamos la clase Task para su uso en el controlador
module.exports = Task;
