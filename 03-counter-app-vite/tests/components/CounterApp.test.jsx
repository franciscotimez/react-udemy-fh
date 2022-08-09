import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../../src/components/CounterApp";


describe('Test en el componente <CounterApp />', () => {

    const initValue = 100;

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<CounterApp initValue={initValue} />);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar el valor inicial', () => {
        render(<CounterApp initValue={initValue} />);
        expect(screen.getByText(initValue)).toBeTruthy();
    });

    test('debe incrementar el contador con el boton +1', () => {
        render(<CounterApp initValue={initValue} />);
        fireEvent.click( screen.getByText('+1') );
        expect(screen.getByText(initValue + 1)).toBeTruthy();
    });

    test('debe decrementar el contador con el boton -1', () => {
        render(<CounterApp initValue={initValue} />);
        fireEvent.click( screen.getByText('-1') );
        expect(screen.getByText(initValue - 1)).toBeTruthy();
    });

    test('debe funcionar el boton de reset', () => {
        render(<CounterApp initValue={initValue} />);
        const incBtn = screen.getByText('+1')
        fireEvent.click( incBtn );
        fireEvent.click( incBtn );
        fireEvent.click( incBtn );

        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );

        expect(screen.getByText(initValue)).toBeTruthy();
    });
});