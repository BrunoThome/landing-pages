import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const Footer = ({ footerContent }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{footerContent}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  footerContent: P.string.isRequired,
};
