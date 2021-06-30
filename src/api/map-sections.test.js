import {
  mapSectionContent,
  mapSectionGridImage,
  mapSectionGridText,
  mapSections,
  mapSectionTwoColumns,
} from './map-sections';

import pagesMock from './dados.json';

describe('Map sections', () => {
  it('should return default sections list', () => {
    const sections = mapSections();
    expect(sections).toEqual([]);
  });

  it('should return mapped sections list', () => {
    const sections = mapSections(pagesMock[0].sections);
    expect(sections[0].component).toBe('section.section-two-columns');
  });

  it('should return mapped section with strange name', () => {
    const sections = mapSections([
      {
        __component: 'some.wrong.component',
      },
    ]);
    expect(sections[0].__component).toBe('some.wrong.component');
  });

  it('should return mapped section grid without text or image', () => {
    const sections = mapSections([
      {
        __component: 'section.section-grid',
        _id: '602fdf2d540c00269e056174',
        description:
          'Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut',
        title: 'My Grid',
      },
    ]);
    expect(sections[0].__component).toBe('section.section-grid');
  });

  it('should return default section two columns', () => {
    const section = mapSectionTwoColumns();
    expect(section.component).toBe('');
    expect(section.title).toBe('');
    expect(section.text).toBe('');
    expect(section.imageSrc).toBe('');
    expect(section.hasBackground).toBe(false);
    expect(section.sectionId).toBe('');
  });

  it('should return mapped section two columns', () => {
    const section = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'title',
      description: 'abcd',
      metadata: {
        background: true,
        section_id: 'home',
      },
      image: {
        url: 'a.svg',
      },
    });
    expect(section.component).toBe('section.section-two-columns');
    expect(section.title).toBe('title');
    expect(section.text).toBe('abcd');
    expect(section.imageSrc).toBe('a.svg');
    expect(section.hasBackground).toBe(true);
    expect(section.sectionId).toBe('home');
  });

  it('should return default section content', () => {
    const section = mapSectionContent();
    expect(section.component).toBe('');
    expect(section.title).toBe('');
    expect(section.content).toBe('');
    expect(section.hasBackground).toBe(false);
    expect(section.sectionId).toBe('');
  });

  it('should return mapped section content', () => {
    const section = mapSectionContent({
      __component: 'section.section-content',
      title: 'title',
      content: 'content',
      metadata: {
        background: false,
        section_id: 'intro',
      },
    });
    expect(section.component).toBe('section.section-content');
    expect(section.title).toBe('title');
    expect(section.content).toBe('content');
    expect(section.hasBackground).toBe(false);
    expect(section.sectionId).toBe('intro');
  });

  it('should return default section grid text', () => {
    const section = mapSectionGridText();
    expect(section.component).toBe('section.section-grid-text');
    expect(section.title).toBe('');
    expect(section.description).toBe('');
    expect(section.grid).toEqual([]);
    expect(section.hasBackground).toBe(false);
    expect(section.sectionId).toBe('');
  });

  it('should return mapped section grid text', () => {
    const section = mapSectionGridText({
      __component: 'section.section-grid',
      description: 'description',
      title: 'My Grid',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'description_grid',
        },
        {
          title: 'Teste 2',
          description: 'description_grid',
        },
        {
          title: 'Teste 3',
          description: 'description_grid',
        },
      ],
      metadata: {
        background: true,
        section_id: 'grid-one',
      },
    });
    expect(section.component).toBe('section.section-grid-text');
    expect(section.title).toBe('My Grid');
    expect(section.description).toBe('description');
    expect(section.hasBackground).toBe(true);
    expect(section.sectionId).toBe('grid-one');
    expect(section.grid[0].title).toBe('Teste 1');
    expect(section.grid[0].description).toBe('description_grid');
  });

  it('should return mapped section grid text with default values when text object is invalid', () => {
    const section = mapSectionGridText({
      __component: 'section.section-grid',
      _id: '602fdf2d540c00269e056174',
      description:
        'Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut',
      title: 'My Grid',
      text_grid: [
        {
          _id: '602fdf2d540c00269e05617c',
        },
      ],
    });
    expect(section.grid[0].title).toBe('');
    expect(section.grid[0].description).toBe('');
  });

  it('should return default section grid image', () => {
    const section = mapSectionGridImage();
    expect(section.component).toBe('section.section-grid-image');
    expect(section.title).toBe('');
    expect(section.description).toBe('');
    expect(section.grid).toEqual([]);
    expect(section.hasBackground).toBe(false);
    expect(section.sectionId).toBe('');
  });

  it('should return mapped section grid image', () => {
    const section = mapSectionGridImage({
      __component: 'section.section-grid',
      _id: '602fdf2d540c00269e056175',
      description: 'description',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'Uma paisagem com céu claro e montanhas bonitas',
            url: 'a.jpg',
          },
        },
        {
          image: {
            alternativeText: 'Um livro grande aberto',
            url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_c073b11d09.jpg',
          },
        },
        {
          image: {
            alternativeText: 'Imagem do topo de uma cidade grande',
            url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_2_38651a645b.jpg',
          },
        },
        {
          image: {
            alternativeText: 'Filme para câmeras antigas',
            url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_9d32ada1f9.jpg',
          },
        },
        {
          image: {
            alternativeText: 'Tela de notebook com Webull',
            url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_a1_973b2a68c9.jpg',
          },
        },
        {
          image: {
            alternativeText: 'Filme Kodak para câmeras antigas',
            url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1613749814/360x360_r_1_b3fcbf1d93.jpg',
          },
        },
      ],
      metadata: {
        background: false,
        section_id: 'gallery',
      },
    });
    expect(section.component).toBe('section.section-grid-image');
    expect(section.title).toBe('Gallery');
    expect(section.description).toBe('description');
    expect(section.grid[0].altText).toBe(
      'Uma paisagem com céu claro e montanhas bonitas',
    );
    expect(section.grid[0].imageSrc).toBe('a.jpg');
    expect(section.hasBackground).toBe(false);
    expect(section.sectionId).toBe('gallery');
  });

  it('should return mapped section grid image with default values when image object is invalid', () => {
    const section = mapSectionGridImage({
      __component: 'section.section-grid',
      _id: '602fdf2d540c00269e056174',
      description:
        'Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut',
      title: 'My Grid',
      image_grid: [{}],
    });
    expect(section.grid[0].altText).toBe('');
    expect(section.grid[0].imageSrc).toBe('');
  });
});
