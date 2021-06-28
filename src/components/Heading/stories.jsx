import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Heading example',
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;

Light.args = {
  children: 'Light Heading',
  currentTheme: 'light',
};
Light.parameters = {
  backgrounds: {
    default: 'light',
  },
  currentTheme: 'light',
};

export const Dark = (args) => <Heading {...args} />;
Dark.args = {
  children: 'Dark Heading',
  currentTheme: 'dark',
};
Dark.parameters = {
  backgrounds: {
    default: 'dark',
  },
  currentTheme: 'dark',
};
