/**
 * @description Design System / Typography page
 */

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PreviewTypography from '../design/Typography';

/**
 * Meta data to display
 */
export default {
  title: 'Design System/Typography',
  component: PreviewTypography,
} as ComponentMeta<typeof PreviewTypography>;

/**
 * Create controls for Typography
 */
export const Template: ComponentStory<typeof PreviewTypography> = () => <PreviewTypography />;

Template.storyName = 'Typography';
