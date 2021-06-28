import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridText } from '.';
import mock from './mock';

describe('<GridText />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridText {...mock}>Children</GridText>);
    expect(container).toMatchSnapshot();
  });
});
