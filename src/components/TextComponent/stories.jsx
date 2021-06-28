import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Tempore minima quos ipsa. Quisquam porro accusamus suscipit optio quo ab harum, 
pariatur maiores enim explicabo quia incidunt, molestiae, exercitationem illo deserunt.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
