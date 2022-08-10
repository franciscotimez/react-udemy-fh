import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Pruebas en <AddCategory />', () => {
    test('Debe de cambiar el valor de la caja de texto', () => {
        render(
            <AddCategory
                onAddCategory={() => { }}
            />
        );

        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Saitama' } });

        expect(input.value).toBe('Saitama');
    });

    test('Debe de llamar a onAddCategory si el input tiene un valor', () => {

        const inputVal = "Dragon Ball";
        const onAddCategoryMock = jest.fn();
        render(
            <AddCategory
                onAddCategory={onAddCategoryMock}
            />
        );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputVal } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onAddCategoryMock).toHaveBeenCalledTimes(1);
        expect(onAddCategoryMock).toHaveBeenCalledWith(inputVal);

    });

    test('NO Debe de llamar a onAddCategory si el input esta vacio', () => {

        const onAddCategoryMock = jest.fn();
        render(
            <AddCategory
                onAddCategory={onAddCategoryMock}
            />
        );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onAddCategoryMock).toHaveBeenCalledTimes(0);
        expect(onAddCategoryMock).not.toHaveBeenCalled();
    });
});