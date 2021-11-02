import React from 'react';
import { ButtonGroupComponent } from '../components/CommonComponents';

export default {
  title: 'BootStrap/ButtonGroupComponent',
  component: ButtonGroupComponent,
};

const ButtonGroupComponentTemplate = (args: any) => (
  <ButtonGroupComponent {...args} />
);

export const Default = ButtonGroupComponentTemplate.bind({});

// Default.args = {};
