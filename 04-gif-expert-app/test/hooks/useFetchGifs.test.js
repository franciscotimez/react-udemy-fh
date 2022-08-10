import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe de regresar el estado inicialmente', () => {
        const { result } = renderHook(() => useFetchGifs('Dragon Ball'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Debe de regresar un arreglo de images y isLoading en false', async () => {
        const { result } = renderHook(() => useFetchGifs('Dragon Ball'));

        // await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0), { timeout: 1000 });
        await waitFor(() => expect(result.current.isLoading).toBeFalsy(), { timeout: 1000 });

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});
