import React from 'react';
import { AlertComponent } from '../components/CommonComponents';

export default {
  title: 'BootStrap/AlertComponent',
  component: AlertComponent,
};

const AlertComponentTemplate = (args: any) => <AlertComponent {...args} />;

export const Default = AlertComponentTemplate.bind({});

// Default.args = {};
