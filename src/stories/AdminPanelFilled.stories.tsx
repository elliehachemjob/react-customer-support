import React from 'react';
import { AdminPanelFilled } from '../components/AdminPanelFilled';

export default {
  title: 'FilledData/AdminPanelFilled',
  component: AdminPanelFilled,
  argTypes: {
    username: {
      description: 'Sets The Initial Value of Username in The Header',
    },
    setUsername: {
      description: 'Sets The Username Of The Header',
    },
    setClientResponder: {
      description: 'Sets The responder msg',
    },
    chatListMapping: {
      description: 'Sets The Username Of The Header',
    },
    clientMessageArray: {
      description: 'Array to hold Clients msgs',
    },
    adminMessageArray: {
      description: 'Array to hold Admin msgs',
    },
    sendMessage: {
      description:
        'Function to handle sending messaging of signalr or similar softwares',
    },
    avatarIco: {
      description: 'Sets The image src of the image ',
    },
    clientMsgs: {
      description: 'To hold the client message state',
    },
  },
};

const AdminWidgetTemplate = (args: any) => <AdminPanelFilled {...args} />;

export const Default = AdminWidgetTemplate.bind({});

Default.args = {
  username: '',
};
