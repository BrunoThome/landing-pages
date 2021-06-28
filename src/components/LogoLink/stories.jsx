import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    imageSrc: 'assets/images/logo.svg',
    link: '#home',
  },
  argTypes: {
    text: { type: 'string' },
    imageSrc: { type: 'string' },
    link: { type: 'string' },
  },
};

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  imageSrc: '',
};
