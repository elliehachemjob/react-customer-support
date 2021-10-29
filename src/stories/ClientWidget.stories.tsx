import React from 'react';
import { ClientWidget } from '../components/ClientWidget';

export default {
  title: 'Widgets/ClientWidget',
  component: ClientWidget,
  argTypes: {
    isWidget: {
      description: 'Changes Widget Animation',
    },
    setIsWidget: {
      description: 'State To Set the Widget Value',
    },
    sendMessage: {
      description: 'You need to set in Singalr/other similar software',
    },
    normalimage: {
      description: 'The image before you use setIsWidget(false) ',
    },
    flippedimage: {
      description: 'The image after you use setIsWidget(true) ',
    },
    normalimageAlt: {
      description: 'NormalImage alt ',
    },
    flippedimageAlt: {
      description: 'FlippedImageAlt alt ',
    },
    normalImageStyle: {
      description: 'NormalImage style ',
    },
    flippedImageStyle: {
      description: 'FlippedImageAlt style ',
    },
    title: {
      description: 'Title of the widget ',
    },
    subtitle: {
      description: 'Subtitle of the widget ',
    },
  },
};

const ClientWidgetTemplate = (args: any) => <ClientWidget {...args} />;

export const Default = ClientWidgetTemplate.bind({});

// Default.args = {
//   isWidget: false,
// };
