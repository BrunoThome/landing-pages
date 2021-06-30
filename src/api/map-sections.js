export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;
      if (text_grid.length > 0) {
        return mapSectionGridText(section);
      }
      if (image_grid.length > 0) {
        return mapSectionGridImage(section);
      }
      return section;
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: imageSrc = '' } = '',
    metadata: {
      background: hasBackground = false,
      section_id: sectionId = '',
    } = false,
  } = section;

  return {
    component,
    title,
    text,
    imageSrc,
    hasBackground,
    sectionId,
  };
};

export const mapSectionGridText = (section = {}) => {
  const {
    title = '',
    description = '',
    text_grid: grid = [],
    metadata: {
      background: hasBackground = false,
      section_id: sectionId = '',
    } = false,
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    description,
    grid: grid.map((item) => {
      const { title = '', description = '' } = item;
      return { title, description };
    }),
    hasBackground,
    sectionId,
  };
};

export const mapSectionGridImage = (section = {}) => {
  const {
    title = '',
    description = '',
    image_grid: grid = [],
    metadata: {
      background: hasBackground = false,
      section_id: sectionId = '',
    } = false,
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    description,
    grid: grid.map((item) => {
      const {
        image: { alternativeText: altText = '', url: imageSrc = '' } = '',
      } = item;
      return {
        altText,
        imageSrc,
      };
    }),
    hasBackground,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content = '',
    metadata: {
      background: hasBackground = false,
      section_id: sectionId = '',
    } = '',
  } = section;
  return {
    component,
    title,
    content,
    hasBackground,
    sectionId,
  };
};
