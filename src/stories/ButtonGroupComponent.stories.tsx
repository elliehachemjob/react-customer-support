import React from 'react';
import { ButtonGroupComponent } from '../components/CommonComponents';

export default {
  title: 'CommonComponents/ButtonGroupComponent',
  component: ButtonGroupComponent,
};

const ButtonComponentTemplate = (args: any) => (
  <ButtonGroupComponent {...args} />
);

export const Default = ButtonComponentTemplate.bind({});

// Default.args = {};
