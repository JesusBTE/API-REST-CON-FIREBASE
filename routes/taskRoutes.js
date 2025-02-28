// Importamos Express y creamos un router
const express = require("express");
const router = express.Router();

// Importamos el controlador de tareas
const TaskController = require("../controllers/taskController");

// Definimos las rutas para gestionar las tareas

// Obtener todas las tareas
router.get("/", TaskController.getTasks);

// Obtener una tarea por su ID
router.get("/:id", TaskController.getTaskById);

// Crear una nueva tarea
router.post("/", TaskController.createTask);

// Actualizar una tarea por su ID
router.put("/:id", TaskController.updateTask);

// Eliminar una tarea por su ID
router.delete("/:id", TaskController.deleteTask);

// Exportamos el router para que pueda ser utilizado en la aplicación principal
module.exports = router;
