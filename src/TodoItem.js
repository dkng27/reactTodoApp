import React from "react";

export default function TodoItem({ todo, toggleAction, clearItem }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => toggleAction(todo.id)}
      />
      {todo.name} <button onClick={() => clearItem(todo.id)}>Clear</button>
    </div>
  );
}
