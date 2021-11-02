import React from 'react';
import { ButtonComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/ButtonComponent',
  component: ButtonComponent,
};

const ButtonComponentTemplate = (args: any) => <ButtonComponent {...args} />;

export const Default = ButtonComponentTemplate.bind({});

// Default.args = {};
