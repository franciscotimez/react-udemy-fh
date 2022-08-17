import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onDeleteTodo }) => {
  console.log(todos);
  return (
    <ul className="list-group">
      {
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
          />
        )
        )
      }
    </ul>
  );
};
