import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'href',
      'http://localhost',
    );
  });

  it('should open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match with the snapshot', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toMatchSnapshot();
  });
});
