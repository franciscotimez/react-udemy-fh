import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";


describe('Test of <GifItem />', () => {

    const image = {
        id: '1231',
        title: 'Titulo de la imagen',
        url: 'http://imagen/'
    };

    test('should be to match with snapshot', () => {
        const { container } = render(
            <GifItem
                {...image}
            />
        );
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el src y al alt', () => {
        render(
            <GifItem
                {...image}
            />
        );

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(image.url);
        expect(alt).toBe(image.title);

    });

    test('debe de mostrar el titulo en el componente', () => {
        render(
            <GifItem
                {...image}
            />
        );
        
        expect(screen.getByText(image.title)).toBeTruthy()

     })

});
