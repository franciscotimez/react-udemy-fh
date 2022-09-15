import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1);
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);
  console.log(todo);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>

      {/* <ul>
        {todos.map(({id , title})=> (
          <li key={id}>{title}</li>
        ))}
      </ul> */}
    </>
  );
};
