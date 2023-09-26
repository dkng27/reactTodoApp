import React, { useState, useEffect, useRef } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

export default function TodoList() {
  const [todos, setTodos] = useState(() => {
    const stored_todos = localStorage.getItem(LOCAL_STORAGE_KEY);
    return JSON.parse(stored_todos) || [];
  });
  const newTodoName = useRef();

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function enterKey(e) {
    if (e.key === "Enter") addTodo(e);
  }

  function addTodo(e) {
    e.preventDefault();
    const name = newTodoName.current.value;
    if (name)
      setTodos((currentTodos) => [
        ...currentTodos,
        { id: uuidv4(), name: name, complete: false },
      ]);
    else alert("You need to give it a name!");
    newTodoName.current.value = null;
  }

  function toggleTodo(id) {
    console.log(`Toggle item with id ${id}`);
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  return (
    <>
      <input
        type="text"
        ref={newTodoName}
        placeholder="New Todo item here"
        onKeyDown={enterKey}
        autoFocus
      />
      <button onClick={addTodo}>Submit</button>
      <button>Clear complete</button>
      <div>{todos.length} items in list.</div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleAction={toggleTodo} />
      ))}
    </>
  );
}
