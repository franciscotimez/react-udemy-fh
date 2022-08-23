import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/hooks/useTodo';

jest.mock('../../src/hooks/useTodo');

describe('Pruebas en <TodoApp />', () => {

    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: 'Demo Todo #1', done: false },
            { id: 2, description: 'Demo Todo #2', done: true },
        ],
        todosCount: 2,
        todosPending: 1,
        handleSubmit: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn()
    });

    test('Debe de mostrar el componente correctametne', () => {
        render(<TodoApp />);
        expect(screen.getByText('Demo Todo #1')).toBeTruthy();
        expect(screen.getByText('Demo Todo #2')).toBeTruthy();
    });

});