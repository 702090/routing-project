import React,{useState} from "react";
import './navbar.css';
import TodoForm from "./todoForm";
import TodoList from "./todoList";


function Dashboard() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setedit] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      const editTodo = todos.find((i) => i.id === edit);
      const updatedTodos = todos.map((a) =>
        a.id === editTodo.id
          ? (a = { id: a.id, todo })
          : { id: a.id, todo: a.todo }
      );
      setTodos(updatedTodos);
      setedit(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((a) => a.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((a) => a.id === id);
    setTodo(editTodo.todo);
    setedit(id);
  };

  return (
    
      <div className="container">
        <h1>Todo List App</h1>
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          edit={edit}
          setTodo={setTodo}
        />&nbsp;

        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    
  );
};

export default Dashboard;
