// Importamos el modelo Task para interactuar con la base de datos
const Task = require("../models/task");

class TaskController {
  // Método para obtener todas las tareas
  static async getTasks(req, res) {
    try {
      const tasks = await Task.getAllTasks(); // Llama al modelo para obtener todas las tareas
      res.json(tasks); // Devuelve la lista de tareas en formato JSON
    } catch (error) {
      res.status(500).json({ error: error.message }); // Manejo de errores internos del servidor
    }
  }

  // Método para obtener una tarea específica por su ID
  static async getTaskById(req, res) {
    try {
      const task = await Task.getTaskById(req.params.id); // Llama al modelo para buscar la tarea por ID
      res.json(task); // Si la tarea existe, la devuelve en formato JSON
    } catch (error) {
      res.status(404).json({ error: "Tarea no encontrada" }); // Error si la tarea no existe
    }
  }

  // Método para crear una nueva tarea
  static async createTask(req, res) {
    try {
      const newTask = await Task.createTask(req.body); // Llama al modelo para crear una nueva tarea
      res.status(201).json(newTask); // Devuelve la tarea creada con código 201 (Created)
    } catch (error) {
      res.status(500).json({ error: error.message }); // Manejo de errores internos del servidor
    }
  }

  // Método para actualizar una tarea existente
  static async updateTask(req, res) {
    try {
      await Task.updateTask(req.params.id, req.body); // Llama al modelo para actualizar la tarea por ID
      res.json({ message: "Tarea actualizada correctamente" }); // Mensaje de éxito
    } catch (error) {
      res.status(500).json({ error: error.message }); // Manejo de errores internos del servidor
    }
  }

  // Método para eliminar una tarea
  static async deleteTask(req, res) {
    try {
      await Task.deleteTask(req.params.id); // Llama al modelo para eliminar la tarea por ID
      res.json({ message: "Tarea eliminada correctamente" }); // Mensaje de éxito
    } catch (error) {
      res.status(500).json({ error: error.message }); // Manejo de errores internos del servidor
    }
  }
}

// Exportamos la clase para que pueda ser utilizada en las rutas
module.exports = TaskController;
