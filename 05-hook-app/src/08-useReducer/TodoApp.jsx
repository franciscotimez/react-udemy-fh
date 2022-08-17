import { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (newTodo) => {
    const action = {
      type: '[TODO] Add',
      payload: newTodo
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Delete',
      payload: id
    });
  };
  return (
    <>
      <h1>Todo App: 10 <small>pendiente: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
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
