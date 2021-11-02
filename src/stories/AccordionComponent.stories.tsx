import React from 'react';
import { AccordionComponent } from '../components/CommonComponents';

export default {
  title: 'CommonComponents/AccordionComponent',
  component: AccordionComponent,
};

const AccordionComponentTemplate = (args: any) => (
  <AccordionComponent {...args} />
);

export const Default = AccordionComponentTemplate.bind({});

// Default.args = {};