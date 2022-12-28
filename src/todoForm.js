import React from "react";

const TodoForm = ({ handleSubmit, todo, edit, setTodo }) => {
  return (
    <form  onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />&nbsp;
      <button type="submit"> {edit ? "Update" : "Add"}</button>
    </form>
  );
};

export default TodoForm;