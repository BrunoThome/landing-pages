import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          quia illum repudiandae provident in nulla eaque enim, consequuntur,
          error nisi, velit recusandae repellendus. Cupiditate sequi eaque,
          debitis modi ut qui.
        </p>
      </div>
    ),
    hasBackground: false,
  },
  argTypes: {
    children: { type: null },
    hasBackground: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
