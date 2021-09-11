import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import {Checkbox} from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Standard = ():JSX.Element => <Checkbox id="my" label={'The label'} onChange={action('clicked') }/>;