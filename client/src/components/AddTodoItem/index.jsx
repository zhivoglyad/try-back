import { useState } from "react";
import TodoForm from "../TodoForm";
import { useFetch } from "../../hooks/useFetch";

export default function AddTodoItem(props) {
    const {
        updateTodoList,
    } = props;

    const [title, setTitle] = useState('');
    const { request } = useFetch();

    const onHandleSubmit = async (e) => {
        e.preventDefault();

        const data = await request('http://localhost:3002/api/todos/add', 'POST', { title });

        if (data) {
            updateTodoList();
            setTitle('');
        }
    };

    return (
        <TodoForm onHandleSubmit={onHandleSubmit} title={title} setTitle={setTitle} />
    )
};