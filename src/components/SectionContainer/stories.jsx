import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
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
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
