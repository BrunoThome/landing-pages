import styled, { css } from 'styled-components';

const containerBackgroundActivate = (theme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div`
  ${({ theme, hasBackground }) => css`
    display: flex;
    align-items: center;
    min-height: 100vh;
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${!!hasBackground && containerBackgroundActivate(theme)};
  `}
`;
