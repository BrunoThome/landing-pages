import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridContent = ({ title, content, hasBackground = false }) => {
  return (
    <SectionBackground hasBackground={hasBackground}>
      <Styled.Container>
        <Heading uppercase colorLight={hasBackground} as="h2">
          {title}
        </Heading>
        <Styled.Content>
          <TextComponent>{content}</TextComponent>
        </Styled.Content>
      </Styled.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  content: P.string.isRequired,
  hasBackground: P.bool,
};
