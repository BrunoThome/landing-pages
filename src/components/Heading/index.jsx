import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({
  children,
  colorLight = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}) => {
  return (
    <Styled.Title
      colorLight={colorLight}
      as={as}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorLight: P.bool,
  uppercase: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'huge']),
};
