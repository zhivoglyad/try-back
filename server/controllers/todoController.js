const TodoModel = require('../models/todoModel');

class TodoController {
    async getTodos(req, res) {
        try {
            const todos = await TodoModel.find({}, 'title').exec();

            return res.status(200).json({ todos });
        } catch (e) {
            return res.status(400).json({ message: 'Произошла ошибка при получении данных' });
        }
    }

    async addTodo(req, res) {
        try {
            if (!req.body.title) {
                return res.status(400).json({ message: 'Пожалуйста, добавьте заголовок' });
            }

            const todoModel = new TodoModel({ title: req.body.title });

            await todoModel.save();

            return res.status(200).json({ message: 'Элемент успешно добавлен' });

        } catch (e) {
            return res.status(400).json({ message: 'Произошла ошибка при добавлении данных' });
        }
    }

    async deleteTodo(req, res) {
        try {
            if (!req.body || !req.body.title) {
                return res.status(400).json({ message: 'Пожалуйста, укажите заголовок' });
            }

            const { deletedCount } = await TodoModel.deleteOne({ title: req.body.title });

            if (deletedCount === 0) {
                return res.status(400).json({ message: 'Удаление не произошло, проверьте заголовок' });
            }

            return res.status(200).json({ message: 'Элемент успешно удален' });
        } catch (e) {
            return res.status(400).json({ message: 'Произошла ошибка при удалении данных' });
        }
    }

    async updateTodo(req, res) {
        try {
            if (!req.body || !req.body.title || !req.body.newTitle) {
                return res.status(400).json({ message: 'Пожалуйста, укажите новый заголовок' });
            }

            const { matchedCount, modifiedCount } =
                await TodoModel.updateOne(
                    { title: req.body.title },
                    { $set: { title: req.body.newTitle } }
                );

            if (matchedCount === 0) {
                return res.status(400).json({ message: 'Элемент с таким заголовком не найден' });
            }

            if (modifiedCount === 0) {
                return res.status(400).json({ message: 'Изменения не были применены' });
            }

            return res.status(200).json({ message: 'Элемент успешно отредактирован' });

        } catch (e) {
            return res.status(400).json({ message: 'Произошла ошибка при сохранении изменений' });
        }
    }
};


module.exports = new TodoController();