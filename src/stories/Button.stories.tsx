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
  children: 'Button',
  size: 'default',
  color: 'primary',
};

PrimaryAlt.args = {
  children: 'Button',
  size: 'default',
  color: 'primaryAlt',
};

Secondary.args = {
  children: 'Button',
  size: 'default',
  color: 'secondary',
};

SecondaryAlt.args = {
  children: 'Button',
  size: 'default',
  color: 'secondaryAlt',
};

Success.args = {
  children: 'Button',
  size: 'default',
  color: 'success',
};

Info.args = {
  children: 'Button',
  size: 'default',
  color: 'info',
};

Warning.args = {
  children: 'Button',
  size: 'default',
  color: 'warning',
};

Danger.args = {
  children: 'Button',
  size: 'default',
  color: 'danger',
};
