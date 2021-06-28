import P from 'prop-types';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const LogoLink = ({ text, imageSrc = '', link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {imageSrc ? <img src={imageSrc} alt={text} /> : <span>{text}</span>}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  imageSrc: P.string,
  link: P.string.isRequired,
};
