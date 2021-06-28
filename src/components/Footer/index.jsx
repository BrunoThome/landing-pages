import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const Footer = ({ content }) => {
  return (
    <SectionContainer>
      <Styled.Container>
        <TextComponent>{content}</TextComponent>
      </Styled.Container>
    </SectionContainer>
  );
};

Footer.propTypes = {
  content: P.string.isRequired,
};
