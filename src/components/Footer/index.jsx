import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const Footer = ({ content }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{content}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  content: P.string.isRequired,
};
