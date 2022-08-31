import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe('Pruebas en <PrivateRoute/>', () => {

    test('Debe de mostrar el children si esta autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            authState: {
                logged: true,
                user: {
                    id: "12234",
                    name: "Francisco"
                }
            }
        };

        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute >
                        <h1>Ruta Publica</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText("Ruta Publica")).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath","/search?q=batman")
    });

});
