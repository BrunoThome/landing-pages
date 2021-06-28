import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridText = ({
  title,
  description,
  grid,
  hasBackground = false,
}) => {
  return (
    <SectionBackground hasBackground={hasBackground}>
      <Styled.Container>
        <Heading colorLight={hasBackground} uppercase as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((gridItem, index) => (
            <Styled.GridItem key={index}>
              <Heading
                colorLight={hasBackground}
                uppercase
                size="small"
                as="h3"
              >
                {gridItem.title}
              </Heading>
              <TextComponent>{gridItem.description}</TextComponent>
            </Styled.GridItem>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({ title: P.string.isRequired, description: P.string.isRequired }),
  ).isRequired,
  hasBackground: P.bool,
};
