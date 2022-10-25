/**
 * @description Atoms / Button component
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../atoms/Button/Button';

/**
 * Meta data to display
 */
export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

/**
 * Create controls for Button
 */
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const PrimaryAlt = Template.bind({});
export const Secondary = Template.bind({});
export const SecondaryAlt = Template.bind({});
export const Success = Template.bind({});
export const Info = Template.bind({});
export const Warning = Template.bind({});
export const Danger = Template.bind({});

Primary.args = {
  children: 'Conocer más',
  size: 'default',
  color: 'primary',
  variation: 'filled',
};

PrimaryAlt.args = {
  children: 'Conocer más',
  size: 'default',
  color: 'primaryAlt',
  variation: 'filled',
};

Secondary.args = {
  children: 'Conocer más',
  size: 'default',
  color: 'secondary',
  variation: 'filled',
};

SecondaryAlt.args = {
  children: 'Conocer más',
  size: 'default',
  color: 'secondaryAlt',
  variation: 'filled',
};

Success.args = {
  children: 'Conocer más',
  size: 'default',
  color: 'success',
  variation: 'filled',
};

Info.args = {
  children: 'Conocer más',
  size: 'default',
  color: 'info',
  variation: 'filled',
};

Warning.args = {
  children: 'Conocer más',
  size: 'default',
  color: 'warning',
  variation: 'filled',
};

Danger.args = {
  children: 'Conocer más',
  size: 'default',
  color: 'danger',
  variation: 'filled',
};
