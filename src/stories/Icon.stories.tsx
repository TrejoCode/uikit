/**
 * Icon Story
 */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from '../atoms/Icons/Icon';

/**
 * Meta data to display
 */
export default {
  title: 'Atoms/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

/**
 * Create controls for Icon
 */
export const Basic: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

Basic.args = {
  icon: 'checkmark',
  size: 8,
};
