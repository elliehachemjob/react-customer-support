import React from 'react';
import { ProfileComponent } from '../components/CommonComponents';

export default {
  title: 'Z-BootStrap/ProfileComponent',
  component: ProfileComponent,
};

const ProfileComponentTemplate = (args: any) => <ProfileComponent {...args} />;

export const Default = ProfileComponentTemplate.bind({});

// Default.args = {};
