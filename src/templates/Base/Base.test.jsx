import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Base } from '.';
import mock from './mock';

describe('<Base />', () => {
  it('should render base template', () => {
    const { container } = renderTheme(<Base {...mock} />);
    expect(
      screen.queryByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();
    expect(screen.queryByRole('contentinfo')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
