import { todoReducer } from "../../src/08-useReducer/todoReducer";


describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }];

    test('Debe de regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState);
    });

    test('Debe de agregar un ToDo', () => {
        const action = {
            type: '[TODO] Add',
            payload: {
                id: 2,
                description: 'Nuevo ToDo',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('Debe de eliminar un ToDo', () => { 
        const action = {
            type: '[TODO] Delete',
            payload: 1
        };

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(0);
     })

     test('Debe de marcar como Done la tarea', () => { 
        const action = {
            type: '[TODO] Toggle',
            payload: 1
        };

        const newState = todoReducer(initialState, action);

        expect(newState[0].done).toBeTruthy();
     })
});