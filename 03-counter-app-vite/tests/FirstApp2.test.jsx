import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
  
  const title = "Hola, soy Goku";
  const subTitle = "Hola, soy un subtitulo";

  test('deberia hacer match con el snapshot', () => {

    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();

  });

  test('deberia tener el titulo "Hola, soy Goku"', () => {

    render(<FirstApp title={title} />);
    expect( screen.getByText(title) ).toBeTruthy()
    // screen.debug()

  });

  test('debe tener el titulo en un h1', () => {

    render(
      <FirstApp
        title={title}
        subTitle={subTitle}
      />
    );

    expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain(title);
  });

  test('debe de mostrar el subTitle enviado por props', () => {

    render(
      <FirstApp
        title={title}
        subTitle={subTitle}
      />
    );

    expect( screen.getByText(subTitle).innerHTML ).toContain(subTitle);
  });
});