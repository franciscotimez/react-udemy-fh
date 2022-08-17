import { useTodo } from "../hooks";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const { todos, todosCount, todosPending, handleSubmit, handleDeleteTodo, handleToggleTodo } = useTodo();

  return (
    <>
      <h1>Todo App: {todosCount} <small>pendiente: {todosPending}</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleSubmit} />
        </div>
      </div>

    </>
  );
};
