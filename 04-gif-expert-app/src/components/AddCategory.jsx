import { useState } from "react";

export const AddCategory = ({onAddCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCategory = inputValue.trim()
    
    if(newCategory.length > 1) {
      onAddCategory(newCategory)
    }
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Buscar Gifs'
        onChange={handleChange}
        value={inputValue}
      />
    </form>
  );
};
