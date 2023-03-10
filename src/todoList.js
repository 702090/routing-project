import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul >
      {todos.map((t) => (
        <li
          key={t.id}>
            {t.todo}
          &nbsp;
          <button onClick={() => handleEdit(t.id)}>Edit</button> &nbsp;
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;