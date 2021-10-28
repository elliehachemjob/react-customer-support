import React from 'react';
import { AdminPanel } from '../components/AdminPanel';

export default {
  title: 'Panels/AdminPanel',
  component: AdminPanel,
  argTypes: {
    username: {
      description: 'Sets The Username Of The Header',
    },
    chatListAppend: {
      description: 'This is where you should append new incoming chats',
    },
    sendMessage: {
      description:
        'Function to send message with singalR or any similar software ',
    },
    avatarIco: {
      description: 'The src  of the image can be string or locally',
    },
    onAttachClick: {
      description: 'Function to handle onAttachClick ',
    },
    onChange: {
      description: 'Function triggered when user is typing',
    },
    sidebarPosition: {
      description: 'Choose location of side bar either example left or right',
    },
    sidebarScrollable: {
      description: 'Set Sidebar if Scrollable or not',
    },
    mainDivstyle: {
      description: 'Sets The Main style Of The Admin Panel',
    },
    messageListContentStyle: {
      description: 'The Styles of the message container',
    },
  },
};

const AdminWidgetTemplate = (args: any) => <AdminPanel {...args} />;

export const Default = AdminWidgetTemplate.bind({});

Default.args = {
  username: '',
};
