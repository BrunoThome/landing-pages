import { Menu } from '.';
import linksMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    children: 'Menu',
    links: linksMock,
    logoData: {
      text: 'LogoLink',
      imageSrc: 'assets/images/logo.svg',
      link: '#home',
    },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
