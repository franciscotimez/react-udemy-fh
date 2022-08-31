import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";


describe('Pruebas en <PublicRoute />', () => {

    test('Debe de mostrar el children si no esta autenticado', () => {

        const contextValue = {
            authState: {
                logged: false
            }
        };

        render(
            <AuthContext.Provider value={contextValue} >
                <PublicRoute >
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText("Ruta Publica")).toBeTruthy();

    });

    test('Debe de navegar si esta autenticado', () => {

        const contextValue = {
            authState: {
                logged: true,
                user: {
                    name: 'Francisco',
                    id: '134'
                }
            }
        };

        render(
            <AuthContext.Provider value={contextValue} >
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="/login" element={
                            <PublicRoute >
                                <h1>Ruta Publica</h1>
                            </PublicRoute>
                        } />

                        <Route path="/" element={<h1>Pagina Otra</h1>} />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText("Pagina Otra")).toBeTruthy();
    });


});