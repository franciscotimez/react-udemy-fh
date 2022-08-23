import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: "Francisco",
        lastName: "Timez",
        email: "franciscotimez@gmail.com"
    };

    test('Debe regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        console.log(result);

        expect(result.current).toEqual({
            name: initialForm.name,
            lastName: initialForm.lastName,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });

    test('Debe de cambiar el nombre del formState', () => {
        const newName = 'Fernando'
        const { result } = renderHook(() => useForm(initialForm));

        const { onInputChange } = result.current;

        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newName
                }
            });
        });

        const { name } = result.current;

        expect(name).toBe(newName);
    });

    test('Debe de realizar el reset del formState', () => {
        const newName = 'Fernando'
        const { result } = renderHook(() => useForm(initialForm));

        const { onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newName
                }
            });

            onResetForm();
        });

        const { name, formState } = result.current;

        expect(name).toBe(initialForm.name);
        expect(formState.name).toBe(initialForm.name);
    });
});
