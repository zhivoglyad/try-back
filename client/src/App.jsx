import { useCallback, useEffect, useState } from 'react';
import { useGetTodoList } from './hooks/useGetTodoList';
import './App.css';
import TodoList from './components/TodoList';
import AddTodoItem from './components/AddTodoItem';
import UpdateTodoItem from './components/UpdateTodoItem';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const getTodoList = useGetTodoList();

  const updateTodoList = useCallback(() => {
    getTodoList().then((res) => setTodoList(res.todos));
  }, [getTodoList]);

  useEffect(() => {
    updateTodoList();
  }, [updateTodoList]);

  return (
    <div className="App">
      <h1>Мои задачи</h1>
      <TodoList todoList={todoList} updateTodoList={updateTodoList} setEditingTodo={setEditingTodo} />
      <br />
      {
        editingTodo && <UpdateTodoItem todo={editingTodo} updateTodoList={updateTodoList} setEditingTodo={setEditingTodo} />
      }
      {
        !editingTodo && <AddTodoItem updateTodoList={updateTodoList} />
      }
    </div>
  );
}

export default App;
