import React from 'react';
import { CardComponent } from '../components/CommonComponents';

export default {
  title: 'BootStrap/CardComponent',
  component: CardComponent,
};

const CardComponentTemplate = (args: any) => <CardComponent {...args} />;

export const Default = CardComponentTemplate.bind({});

// Default.args = {};