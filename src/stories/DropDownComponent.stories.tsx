import React from 'react';
import { DropDownComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/DropDownComponent',
  component: DropDownComponent,
};

const DropDownComponentTemplate = (args: any) => (
  <DropDownComponent {...args} />
);

export const Default = DropDownComponentTemplate.bind({});

// Default.args = {};
