
import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('Pruebas en el componente <MultipleCustomHooks />', () => {

    const mockAddCounter = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        addCounter: mockAddCounter
    });

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        // screen.debug();

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('BreakingBad Quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });

        expect(nextButton.disabled).toBeTruthy();
    });

    test('Debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: "Francisco", quote: "Hola mundo" }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Francisco')).toBeTruthy();
        expect(screen.getByText('Hola mundo')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });

        expect(nextButton.disabled).toBeFalsy();
        // screen.debug();
    });

    test('Debe de llamar a la funcion incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ author: "Francisco", quote: "Hola mundo" }],
            isLoading: false,
            hasError: null
        });


        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        fireEvent.click(nextButton);

        expect(mockAddCounter).toHaveBeenCalled();
        console.log(screen);

    });


});