import React from 'react';
import { SignUpForm } from '../components/Forms';

export default {
  title: 'Forms/SignUpForm',
  component: SignUpForm,
  argTypes: {
    joinRoom: {
      description:
        'Function that allows you to connect to room/server Sinalr or similar software   ',
    },
    user: {
      description: 'Variable to hold the User value(Use useState etc)   ',
    },
    setUser: {
      description: 'Variable to set the User value(Use useState etc)   ',
    },
    password: {
      description: 'Variable to hold the Password value(Use useState etc)  ',
    },
    setPassword: {
      description: 'Variable to set the Password value(Use useState etc)  ',
    },

    title: {
      description: 'Sets the title of the container  ',
    },
    fieldOneType: {
      description: 'Sets the type of field one Default is  email ',
    },
    containerStyle: {
      description: 'To change the container style ',
    },
    fieldOnePlaceholder: {
      description: 'Sets the Placeholder of field one Default is  email ',
    },
    fieldOneIcon: {
      description:
        'Sets the Icon of field one Default is Font Awesome faEnvelope  ',
    },
    fieldTwoIcon: {
      description: 'Sets the Icon of field Two Default is Font Awesome faLock',
    },
    textAlign: {
      description: 'Defines text TextAlign default is centered  ',
    },
    signUpHandlertitle: {
      description:
        'Defines the title/word contained inside the SignUp Handler Button button ',
    },
    checkIcon: {
      description: 'Icon to check if password is correct',
    },
    titleColor: {
      description: 'Color of the title Default is white ',
    },
    fieldTwoIconLeft: {
      description: 'Sets the icon "Position" of field two ',
    },
    titleBackground: {
      description: 'The Background color of the title usually it is primary',
    },
    fieldTwoType: {
      description: 'The type of field one Default is Password ',
    },
    fieldTwoPlaceholder: {
      description: 'Sets the Placeholder of field one Default is  Password  ',
    },
    checkIconSize: {
      description: 'Sets the icon size Default is small ',
    },
    checkIconAlign: {
      description: 'Sets the icon size Default is right ',
    },
    faEnvelopeSize: {
      description: 'Sets the size of the "Email Icon" size  ',
    },
    faEnvelopeAlign: {
      description: 'Sets the position of the "Email Icon" size  ',
    },
    sendEmailVerification: {
      description:
        'variable to hold value could be used to send email verification   ',
    },
    setSendEmailVerification: {
      description: 'variable to set value could be set email verification  ',
    },
    fieldThreeType: {
      description: 'The type of field one Default is Send Email Verification  ',
    },
    fieldThreePlaceholder: {
      description: 'Sets the Placeholder of field one Default is  Password  ',
    },
    signUpHandler: {
      description:
        'Function onPress of Login you can defined your custom code in it  ',
    },
    fieldThreeIcon: {
      description:
        'Sets the Icon of field one Default is Font Awesome faArrowRight ',
    },
  },
};

const SignUpFormTemplate = (args: any) => <SignUpForm {...args} />;

export const Default = SignUpFormTemplate.bind({});

Default.args = {};
