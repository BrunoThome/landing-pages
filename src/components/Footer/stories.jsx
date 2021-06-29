import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerContent:
      '<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Bruno Thome</a></p>',
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
