import React from 'react';
import { CloseButtonComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/CloseButtonComponent',
  component: CloseButtonComponent,
};

const CardComponentTemplate = (args: any) => <CloseButtonComponent {...args} />;

export const Default = CardComponentTemplate.bind({});

// Default.args = {};
