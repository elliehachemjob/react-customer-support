import React from 'react';
import { CarouselComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/CarouselComponent',
  component: CarouselComponent,
};

const CarouselComponentTemplate = (args: any) => (
  <CarouselComponent {...args} />
);

export const Default = CarouselComponentTemplate.bind({});

// Default.args = {};
