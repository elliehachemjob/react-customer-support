// @ts-ignore
import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

interface ButtonComponentProps {
  onClick?: () => void;
  text?: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-light'
    | 'outline-link';
  size?: 'lg' | 'sm';
  disabled?: boolean;
  active?: boolean;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = (
  props: any
): any => {
  return (
    <Button
      onClick={
        !props.onClick
          ? () => {
              alert('use the onClick prop to add your own function here');
            }
          : props.onClick
      }
      variant={!props.variant ? 'primary text-right' : props.variant}
      type="submit"
      size={!props.size ? '' : props.size}
      disabled={!props.disabled ? true : props.disabled}
      active={!props.active ? false : props.active}
    >
      {!props.text ? 'Text aligned when component used' : props.text}
    </Button>
  );
};

interface AlertComponentProps {
  onClose?: () => void;
  heading: string;
  allowHeading: boolean;
  text?: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-light'
    | 'outline-link';
  removable?: boolean;
  show?: boolean;
}

export const AlertComponent: React.FC<AlertComponentProps> = (
  props: any
): any => {
  return (
    <div>
      {props.allowHeading ? (
        <Alert variant={!props.variant ? 'success' : props.variant}>
          <p>
            {!props.text
              ? ' Heading Brief Description  Change Here'
              : props.text}
          </p>
        </Alert>
      ) : (
        <Alert
          show={!props.show ? true : props.show}
          onClose={
            !props.onClose
              ? () => {
                  alert(
                    'function to do on close perhaps turn show props to flase or give an alert '
                  );
                }
              : props.onClose
          }
          dismissible={!props.removable ? true : props.removable}
          variant={!props.variant ? 'success' : props.variant}
        >
          <Alert.Heading>
            {!props.heading ? 'Heading Text Change Here' : props.heading}
          </Alert.Heading>
          <p>
            {!props.text
              ? ' Heading Brief Description  Change Here'
              : props.text}
          </p>
        </Alert>
      )}
    </div>
  );
};

interface AccordionComponentProps {
  accordionItemId: string;
  onClickHeader?: () => void;
  accordionTitleText: string;
  accordionBodyText: string;
  onClickBody?: () => void;
}

export const AccordionComponent: React.FC<AccordionComponentProps> = (
  props: any
): any => {
  return (
    <Accordion>
      <Accordion.Item
        eventKey={!props.accordionItemId ? '0' : props.accordionItemId}
      >
        <Accordion.Header
          onClick={
            !props.onClickHeader
              ? () => {
                  alert('header Clicked Put Function Here');
                }
              : props.onClickHeader
          }
        >
          {!props.accordionTitleText
            ? 'Accordion Title Text'
            : props.accordionTitleText}
        </Accordion.Header>
        <Accordion.Body
          onClick={
            !props.onClickBody
              ? () => {
                  alert('Body clicked header Clicked Put Function Here');
                }
              : props.onClickBody
          }
        >
          {!props.accordionBodyText
            ? 'Accordion Body Text'
            : props.accordionBodyText}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
