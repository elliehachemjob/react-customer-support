import React from 'react';
import { SidebarAdminPanel } from '../components/SidebarAdminPanel';

export default {
  title: 'Extra/SidebarAdminPanel',
  component: SidebarAdminPanel,
  argTypes: {
    position: {
      description: 'Sets The position of the SidebarExpansion ',
    },
    data: {
      description:
        'Data to put inside the Sidebar in order for sidebar to appear  ',
    },
  },
};

const SidebarAdminPanelTemplate = (args: any) => (
  <SidebarAdminPanel {...args} />
);

export const Default = SidebarAdminPanelTemplate.bind({});

// Default.args = {};
