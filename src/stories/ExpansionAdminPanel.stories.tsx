import React from 'react';
import { ExpansionAdminPanel } from '../components/ExpansionAdminPanel';

export default {
  title: 'Extra/ExpansionAdminPanel',
  component: ExpansionAdminPanel,
  argTypes: {
    title: {
      description: 'Sets The Title of the SidebarExpansion ',
    },
    position: {
      description: 'Sets The position of the SidebarExpansion ',
    },
    expanstionPanelData1: {
      description: 'Sets The  Data of the first div in the SidebarExpansion 1',
    },
    expanstionPanelData2: {
      description: 'Sets The  Data of the first div in the SidebarExpansion 2',
    },
    expanstionPanelData3: {
      description: 'Sets The  Data of the first div in the SidebarExpansion 3',
    },
    expanstionPanelData4: {
      description: 'Sets The  Data of the first div in the SidebarExpansion 4',
    },
    onClickExpanstionPanelData1: {
      description:
        'Sets The  EventHnalder of the first div in the SidebarExpansion 1',
    },
    onClickExpanstionPanelData2: {
      description:
        'Sets The  EventHnalder of the first div in the SidebarExpansion 2',
    },
    onClickExpanstionPanelData3: {
      description:
        'Sets The  EventHnalder of the first div in the SidebarExpansion 3',
    },
    onClickExpanstionPanelData4: {
      description:
        'Sets The  EventHnalder of the first div in the SidebarExpansion 4',
    },
  },
};

const ExpansionAdminPanelWidgetTemplate = (args: any) => (
  <ExpansionAdminPanel {...args} />
);

export const Default = ExpansionAdminPanelWidgetTemplate.bind({});

Default.args = {};
