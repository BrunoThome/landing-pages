import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css``}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: ${theme.spacings.large};
    margin-top: ${theme.spacings.xhuge};
  `}
`;

export const GridItem = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
  `}
`;

export const GridItemImage = styled.img`
  ${({ theme }) => css`
    width: 100%;
    transition: all 300ms ease-in-out;

    &:hover {
      transform: scale(1.2) rotate(10deg);
    }
  `}
`;
