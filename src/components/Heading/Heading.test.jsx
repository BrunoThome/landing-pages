import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      color: theme.colors.white,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'initial',
    });
  });

  it('should render with dark theme color', () => {
    renderTheme(<Heading currentTheme="dark">texto</Heading>);
    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct small heading', () => {
    renderTheme(<Heading size="small">texto</Heading>);
    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });
  });

  it('should render correct medium heading', () => {
    renderTheme(<Heading size="medium">texto</Heading>);
    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.large,
    });
  });

  it('should render correct big heading', () => {
    renderTheme(<Heading size="big">texto</Heading>);
    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xlarge,
    });
  });

  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">texto</Heading>);
    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyleRule(
      'font-size',
      theme.fonts.sizes.xlarge,
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>texto</Heading>);
    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);
    const h6 = container.querySelector('h6');
    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
