import { useForm } from "../hooks/useForm";


export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  });

  const handleAdd = (event) => {
    event.preventDefault();
    if (description.length > 4) {
      const newTodo =
      {
        id: new Date().getTime(),
        description,
        done: false
      };
      onNewTodo(newTodo);
      onResetForm();
    }
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Que hay wey?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button
        type="submit"
        className="btn btn-primary mt-2"
      >
        Agregar
      </button>
    </form>
  );
};
