import { act, renderHook } from '@testing-library/react';
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en useCounter', () => {
    test('Debe retornar los valores por default', () => {

        const { result } = renderHook(() => useCounter());

        const { counter, addCounter, subsCounter, resetCounter } = result.current

        expect(counter).toBe(0);
        expect(addCounter).toEqual(expect.any(Function));
        expect(subsCounter).toEqual(expect.any(Function));
        expect(resetCounter).toEqual(expect.any(Function));
    });

    test('Debe de generar el counter con valor 100', () => {
        const { result } = renderHook(() => useCounter(100));

        const { counter } = result.current

        expect(counter).toBe(100);
    });
    
    test('Debe de incrementar el counter', () => {
        const { result } = renderHook(() => useCounter());
        
        const { addCounter } = result.current

        act(() => {
            addCounter();
            addCounter(2);
        })

        const { counter } = result.current

        expect(counter).toBe(3);
    });
    
    test('Debe de decrementar el counter', () => {
        const { result } = renderHook(() => useCounter(3));
        
        const { subsCounter } = result.current

        act(() => {
            subsCounter();
            subsCounter(2);
        })
        
        const { counter } = result.current

        expect(counter).toBe(0);
    });

    test('Debe de decrementar el counter', () => {
        const { result } = renderHook(() => useCounter(3));
        
        const { subsCounter, resetCounter } = result.current

        act(() => {
            subsCounter();
            subsCounter(2);
            resetCounter();
        })
        
        const { counter } = result.current

        expect(counter).toBe(3);
    });
});
