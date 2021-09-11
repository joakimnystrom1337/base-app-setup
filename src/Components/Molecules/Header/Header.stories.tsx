import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Molecules/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const LoggedIn = ()=> <Header 
onLogin={action('loggin in')} 
onLogout={action('loggin inout')} 
onCreateAccount={action('crateing account')} />
