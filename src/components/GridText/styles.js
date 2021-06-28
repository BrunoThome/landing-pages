import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css``}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.xlarge};
    counter-reset: grid-counter;
    margin-top: ${theme.spacings.xhuge};
  `}
`;

export const GridItem = styled.div`
  ${({ theme }) => css`
    ${HeadingContainer} {
      position: relative;
      left: 5rem;
    }

    ${HeadingContainer}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: ${theme.fonts.sizes.xhuge};
      top: -3rem;
      left: -5rem;
      transform: rotate(10deg);
    }
  `}
`;
