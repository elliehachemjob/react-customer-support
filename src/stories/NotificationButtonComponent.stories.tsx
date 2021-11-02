import React from 'react';
import { NotificationButtonComponent } from '../components/CommonComponents';

export default {
  title: 'CommonComponents/NotificationButtonComponent',
  component: NotificationButtonComponent,
};

const NotificationButtonComponentTemplate = (args: any) => (
  <NotificationButtonComponent {...args} />
);

export const Default = NotificationButtonComponentTemplate.bind({});

// Default.args = {};
