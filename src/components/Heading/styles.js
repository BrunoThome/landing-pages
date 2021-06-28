import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.fonts.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
    @media ${theme.media.lteMedium} {
      font-size: ${theme.fonts.sizes.xlarge};
    }
  `,
};

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'initial'};
`;

export const Title = styled.h1`
  ${({ theme, colorLight, size, uppercase }) => css`
    color: ${colorLight ? theme.colors.white : theme.colors.primaryColor};
    ${titleSize[size](theme)}
    ${titleCase(uppercase)}
  `}
`;
