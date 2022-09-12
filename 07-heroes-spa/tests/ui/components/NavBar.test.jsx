import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { NavBar } from "../../../src/ui/components/NavBar";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <NavBar />', () => {

    const contextValue = {
        authState: {
            logged: true,
            user: {
                id: "12234",
                name: "Francisco"
            }
        },
        logout: jest.fn()
    };

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el nombre de usuario', () => {

        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <NavBar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText(contextValue.authState.user.name)).toBeTruthy();
    });

    test('Debe de llamar el logout y el navigate cuando se hace click en el boton', () => {
        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <NavBar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
    });
});