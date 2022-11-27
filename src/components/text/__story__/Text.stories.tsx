import Text from '../Text';
import { TextProps } from '../Text';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args: TextProps) => <Text {...args} />;


export const Playground = Template.bind({});

Playground.args = {
  type: '2xl',
  isHeavy: true,
  content: 'Storybook text'
};