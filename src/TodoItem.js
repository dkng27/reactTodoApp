import React from "react";

export default function TodoItem({ todo, toggleAction }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => toggleAction(todo.id)}
      />
      {todo.name} <button>Clear</button>
    </div>
  );
}
