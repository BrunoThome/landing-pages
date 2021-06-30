import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return a default menu if there is not data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.imageSrc).toBe('');
    expect(menu.link).toBe('');
  });
  it('should map menu to match key and values required', () => {
    const menu = mapMenu({
      open_in_new_tab: false,
      logo_text: 'Landing Page',
      logo_link: '#home',
      menu: [
        {
          open_in_new_tab: false,
          _id: '602fdf30540c00269e0561af',
          link_text: 'intro',
          url: '#intro',
          __v: 0,
          id: '602fdf30540c00269e0561af',
        },
        {
          open_in_new_tab: false,
          _id: '602fdf30540c00269e0561b0',
          link_text: 'grid-one',
          url: '#grid-one',
          __v: 0,
          id: '602fdf30540c00269e0561b0',
        },
      ],
      logo: {
        url: 'a.svg',
      },
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing Page');
    expect(menu.imageSrc).toBe('a.svg');
    expect(menu.link).toBe('#home');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('intro');
    expect(menu.links[0].link).toBe('#intro');
  });

  it('should return an empty if no links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });
  it('should return an links list if there are links', () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        link_text: 'intro',
        url: '#intro',
      },
      {
        open_in_new_tab: false,
        link_text: 'grid-one',
        url: '#grid-one',
      },
    ]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('intro');
    expect(links[0].link).toBe('#intro');
  });

  it('should return a default link if there is not a link in list', () => {
    const links = mapMenuLinks([{}]);
    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('');
    expect(links[0].link).toBe('');
  });
});
