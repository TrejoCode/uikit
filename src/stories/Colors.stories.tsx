/**
 * @description Design System / Colors page
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PreviewColors from '../design/Colors';

/**
 * Meta data to display
 */
export default {
  title: 'Design System/Colors',
  component: PreviewColors,
} as ComponentMeta<typeof PreviewColors>;

/**
 * Create controls for Colors
 */
export const Template: ComponentStory<typeof PreviewColors> = (args) => <PreviewColors {...args} />;

Template.storyName = 'Colors';
