import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUseNavigate
}));


describe('Pruebas en <SearchPage />', () => {

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrarse correctametne con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        screen.debug();
        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar a Batman y el input con el valor del queryString', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );


        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');

        const img = screen.getByRole('img');
        expect(img.src).toContain("/assets/heroes/dc-batman.jpg");
    });

    test('Debe de mostrar a un alert box si no se encuentra en heroe (batman13)', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman13']}>
                <SearchPage />
            </MemoryRouter>
        );

        // screen.debug()
        const alertBox = screen.getByLabelText('notFoundResult');
        expect(alertBox).toBeTruthy();

    });

    test('Debe de llamar el navigate a la pantalla nueva', () => {

        const inputValue = "superman";
        
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );

        // screen.debug()
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { name: 'searchText', value: inputValue } });

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);

    });
});