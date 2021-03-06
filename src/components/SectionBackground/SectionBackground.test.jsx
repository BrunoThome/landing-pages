import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SectionBackground } from '.';

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground hasBackground={true}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('<SectionBackground />', () => {
  it('should render with background light', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
