import { useState } from "react";
import TodoForm from "../TodoForm";
import { createRequest } from "../../hooks/createRequest";


export default function UpdateTodoItem(props) {
    const {
        todo,
        updateTodoList,
        setEditingTodo,
    } = props;

    const [newTitle, setNewTitle] = useState(todo.title);
    const { request } = createRequest();

    const onHandleSubmit = async (e) => {
        e.preventDefault();

        const data = await request('http://localhost:3002/api/todos/update', 'PATCH', { title: todo.title, newTitle: newTitle });

        if (data) {
            updateTodoList();
            setEditingTodo(null);

            setNewTitle('');
        }
    };


    return (
        <TodoForm onHandleSubmit={onHandleSubmit} title={newTitle} setTitle={setNewTitle} />
    )
}