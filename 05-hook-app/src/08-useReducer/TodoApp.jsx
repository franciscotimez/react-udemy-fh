import { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del Alma',
    done: false
  },
  {
    id: new Date().getTime()+100,
    description: 'Recolectar la piedra del Poder',
    done: false
  }
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (newTodo) => {
    const action = {
      type: '[TODO] Add',
      payload: newTodo
    }
    dispatch(action)
  }
  return (
    <>
      <h1>Todo App: 10 <small>pendiente: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>

        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleSubmit}/>
        </div>
      </div>

    </>
  );
};
