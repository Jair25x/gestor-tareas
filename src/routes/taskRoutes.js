const express = require('express');
const { body, param } = require('express-validator');
const taskController = require('../controllers/taskController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID único de la tarea
 *         title:
 *           type: string
 *           description: Título de la tarea
 *         description:
 *           type: string
 *           description: Descripción de la tarea
 *         completed:
 *           type: boolean
 *           description: Estado de la tarea
 *       example:
 *         id: "123e4567-e89b-12d3-a456-426614174000"
 *         title: "Aprender Swagger"
 *         description: "Documentar mi API con Swagger"
 *         completed: false
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Obtener todas las tareas
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Lista de todas las tareas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
router.get('/tasks', taskController.getAllTasks);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Crear una nueva tarea
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente
 */
router.post(
  '/tasks',
  [
    body('title').notEmpty().withMessage('El título es obligatorio'),
    body('description').optional().isString(),
  ],
  taskController.createTask
);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Actualizar una tarea por ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: Tarea actualizada exitosamente
 */
router.put(
  '/tasks/:id',
  [
    param('id').isUUID().withMessage('ID no válido'),
    body('title').optional().notEmpty(),
    body('description').optional().isString(),
    body('completed').optional().isBoolean(),
  ],
  taskController.updateTask
);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Eliminar una tarea por ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea
 *     responses:
 *       200:
 *         description: Tarea eliminada exitosamente
 */
router.delete(
  '/tasks/:id',
  [param('id').isUUID().withMessage('ID no válido')],
  taskController.deleteTask
);

module.exports = router;