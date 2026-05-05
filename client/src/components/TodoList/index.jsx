import { useFetch } from "../../hooks/useFetch";

export default function TodoList(props) {
    const {
        todoList,
        updateTodoList,
        setEditingTodo,
    } = props;

    const { request } = useFetch();

    const deleteTodoItem = async (title) => {

        const data = await request('http://localhost:3002/api/todos/delete', 'DELETE', { title });

        if (data) {
            updateTodoList();
        }
    };

    return (
        <>
            {
                !todoList.length && <>Loading...</>
            }
            {
                todoList.map((todo) =>
                    <div key={todo._id}>
                        {todo.title}
                        <button style={{ marginLeft: "20px", cursor: 'pointer' }} onClick={() => deleteTodoItem(todo.title)}>Удалить</button>
                        <button style={{ marginLeft: "20px", cursor: 'pointer' }} onClick={() => setEditingTodo(todo)}>Редактировать</button>
                    </div>)
            }
        </>
    )
};