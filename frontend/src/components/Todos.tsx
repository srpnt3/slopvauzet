import { useEffect, useState } from "react";
import {
  createTodo,
  deleteTodo,
  getMe,
  getTodos,
  type TodoItem,
  type User,
} from "../apiClient";
import "./Todos.css";

const Todos = () => {
  const [me, setMe] = useState<User | undefined>();
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");

  async function updateMe() {
    setMe(await getMe());
  }

  async function updateTodos() {
    setTodos(await getTodos());
  }

  useEffect(() => {
    updateMe();
    updateTodos();
  }, []);

  return (
    <div className="todos">
      <h1>Todos {me && <>of {me.name}</>}</h1>
      <div>
        <input
          type="text"
          placeholder="Enter new todo item"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
        <button
          onClick={async () => {
            await createTodo(newTodoTitle);
            setNewTodoTitle("");
            await updateTodos();
          }}
        >
          Create Todo
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <td>{index + 1}</td>
              <td>{todo.title}</td>
              <td>
                <button
                  onClick={async () => {
                    await deleteTodo(todo.id);
                    await updateTodos();
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
