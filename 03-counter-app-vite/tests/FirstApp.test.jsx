import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
  test('deberia hacer match con el snapshot', () => {

    const title = "Hola, soy Goku";

    const { container } = render(<FirstApp title={title} />);

    // expect(container).toMatchSnapshot();

  });

  test('deberia tener el titulo en un h1', () => {

    const title = "Hola, soy Goku";

    const { container, getByText, getByTestId } = render(<FirstApp title={title} />);

    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector('h1');
    expect(h1.innerHTML).toContain(title);

    expect(getByTestId('test-title').innerHTML).toContain(title);

  });

  test('deberia tener el titulo en un h1', () => {

    const title = "Hola, soy Goku";
    const subTitle = "Hola, soy un subtitulo";

    const { getByText } = render(
      <FirstApp
        title={title}
        subTitle={subTitle}
      />
    );

    expect(getByText(subTitle)).toBeTruthy();
  });
});