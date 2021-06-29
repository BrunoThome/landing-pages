import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <Footer footerContent="<h1>Olá mundo </h1>" />,
    );
    expect(container).toMatchSnapshot();
  });
});
