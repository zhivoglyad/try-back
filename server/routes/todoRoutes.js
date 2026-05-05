const { Router } = require("express");
const todoController = require('../controllers/todoController');

const todoRoutes = new Router();

todoRoutes.get('/list', todoController.getTodos);
todoRoutes.post('/add', todoController.addTodo);
todoRoutes.delete('/delete', todoController.deleteTodo);
todoRoutes.patch('/update', todoController.updateTodo);

module.exports = todoRoutes;





// /api/todos/list
// /api/todos/add
// /api/todos/delete
// /api/todos/update