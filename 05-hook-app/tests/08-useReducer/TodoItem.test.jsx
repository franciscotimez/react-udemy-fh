import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from "../../src/08-useReducer/TodoItem";


describe('Pruebas en <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Demo Todo',
        done: false
    };

    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('Debe mostrar el todo pendiente', () => {
        render(<TodoItem
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
        />);

        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).not.toContain('text-decoration-line-through')

    });

    test('Debe mostrar el todo Completado', () => {
        todo.done =  true
        render(<TodoItem
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
        />);

        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).toContain('text-decoration-line-through')

    });

    test('Debe llamar al toggleTodo cuando se hace click', () => {
        todo.done =  true
        render(<TodoItem
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
        />);

        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)
        expect(onToggleTodo).toHaveBeenCalledWith(todo.id)

    });

    test('Debe llamar al onDeleteTodo cuando se hace click en el boton', () => {
        todo.done =  true
        render(<TodoItem
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
        />);

        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement)
        expect(onDeleteTodo).toHaveBeenCalledWith(todo.id)

    });
});
