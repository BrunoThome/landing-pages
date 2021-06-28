import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Hello World" />);
    expect(
      screen.getByRole('heading', { name: 'Hello World' }).firstChild,
    ).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Hello World" imageSrc="image.jpg" />,
    );
    expect(screen.getByAltText('Hello World')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });
});
