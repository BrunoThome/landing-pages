import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridImage = ({
  title,
  description,
  grid,
  hasBackground = false,
}) => {
  return (
    <SectionBackground hasBackground={hasBackground}>
      <Styled.Container>
        <Heading colorLight={hasBackground} as="h2" uppercase>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((gridItem) => (
            <Styled.GridItem key={gridItem.imageSrc}>
              <Styled.GridItemImage
                src={gridItem.imageSrc}
                alt={gridItem.altText}
              />
            </Styled.GridItem>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({ altText: P.string.isRequired, imageSrc: P.string.isRequired }),
  ).isRequired,
  hasBackground: P.bool,
};
