import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe('Pruebas en <AppRouter />', () => {

    test('Debe de mostrar el login si no esta autenticado', () => {

        const contextValue = {
            authState: {
                logged: false
            }
        };
        render(
            <MemoryRouter initialEntries={['/marvel']} >
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getAllByText('Login').length).toBe(2)
    });

    test('Debe de mostrar el componente marvel si esta autenticado', () => {

        const contextValue = {
            authState: {
                logged: true,
                user: {
                    id: "12456",
                    name: "Francisco"
                }
            }
        };
        render(
            <MemoryRouter initialEntries={['/marvel']} >
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        // screen.debug()
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)
    });

});