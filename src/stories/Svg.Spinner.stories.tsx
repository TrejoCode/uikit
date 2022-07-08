/**
 * @description Svg / Spinner component
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SvgSpinner from '../atoms/Svg/Loaders/Spinner';

/**
 * Meta data to display
 */
export default {
  title: 'Atoms/Svg/Spinner',
  component: SvgSpinner,
  argTypes: {
    size: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'primaryAlt', 'secondary', 'secondaryAlt', 'success', 'info', 'warning', 'danger'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof SvgSpinner>;

/**
 * Create controls for SvgSpinner
 */
const Template: ComponentStory<typeof SvgSpinner> = (args) => <SvgSpinner {...args} />;

export const Primary = Template.bind({});
export const PrimaryAlt = Template.bind({});
export const Secondary = Template.bind({});
export const SecondaryAlt = Template.bind({});
export const Success = Template.bind({});
export const Info = Template.bind({});
export const Warning = Template.bind({});
export const Danger = Template.bind({});

Primary.args = {
  size: 8,
  color: 'primary',
};

PrimaryAlt.args = {
  size: 8,
  color: 'primaryAlt',
};

Secondary.args = {
  size: 8,
  color: 'secondary',
};

SecondaryAlt.args = {
  size: 8,
  color: 'secondaryAlt',
};

Success.args = {
  size: 8,
  color: 'success',
};

Info.args = {
  size: 8,
  color: 'info',
};

Warning.args = {
  size: 8,
  color: 'warning',
};

Danger.args = {
  size: 8,
  color: 'danger',
};
