---
to: src/Components/Atoms/<%= name %>/<%= name %>.stories.tsx
---
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {<%= name %>} from './<%= name %>';

export default {
  title: 'Atoms/<%= name %>',
  component: <%= name %>,
} as ComponentMeta<typeof <%= name %>>;

const Standard = ():JSX.Element => <<%= name %> />;

