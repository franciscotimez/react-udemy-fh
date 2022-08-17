import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
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

  const handleToggleTodo = (id) => {
    dispatch({
      type: '[TODO] Toggle',
      payload: id
    });
  };

  return {
    todos,
    todosCount: todos.length,
    todosPending: todos.filter(to => !to.done).length,
    handleSubmit,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
