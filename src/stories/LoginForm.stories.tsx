import React from 'react';
import { LoginForm } from '../components/Forms';

export default {
  title: 'Forms/LoginForm',
  component: LoginForm,
  argTypes: {
    joinRoom: {
      description:
        'just a function that allows you to connect to room/server etc you should be making one  ',
    },
    user: {
      description:
        'just a function that allows you to connect to room/server etc you should be making one  ',
    },
    setUser: {
      description:
        'just a function that allows you to connect to room/server etc you should be making one  ',
    },
    password: {
      description:
        'just a function that allows you to connect to room/server etc you should be making one  ',
    },
    setPassword: {
      description:
        'just a function that allows you to connect to room/server etc you should be making one  ',
    },
    loginHandler: {
      description:
        'just a function that allows you to connect to room/server etc you should be making one  ',
    },
    title: {
      description:
        'just a function that allows you to connect to room/server etc you should be making one  ',
    },
    fieldOneType: {
      description:
        'just a function that allows you to connect to room/server etc you should be making one  ',
    },
    containerStyle: {
      description:
        'just a function that allows you to connect to room/server etc you should be making one  ',
    },
  },
};

const LoginFormTemplate = (args: any) => <LoginForm {...args} />;

export const Default = LoginFormTemplate.bind({});

Default.args = {};
