import Card from '../Card';
import { CardProps } from '../Card';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: CardProps) => <Card {...args} />;


export const Playground = Template.bind({});

Playground.args = {
  type: 'md',
  isBold: true,
};