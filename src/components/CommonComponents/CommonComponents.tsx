// @ts-ignore
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Button,
  Alert,
  Accordion,
  Badge,
  ButtonGroup,
  Card,
  Carousel,
  CloseButton,
} from 'react-bootstrap';

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
  accordionTitleText?: string;
  accordionBodyText?: string;
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

interface NotificationButtonComponentProps {
  onClick?: () => void;
  buttonText?: string;
  buttonVariant?:
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
  badgeVariant?:
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
  badgeCircular: boolean;
  badgeTextValue: string;
}

export const NotificationButtonComponent: React.FC<NotificationButtonComponentProps> = (
  props: any
): any => {
  return (
    <Button variant={!props.buttonVariant ? 'primary' : props.buttonVariant}>
      {!props.buttonText ? 'Button Text' : props.buttonText}

      <Badge
        pill={!props.badgeCircular ? false : props.badgeCircular}
        bg={!props.badgeVariant ? 'danger' : props.variant}
      >
        {!props.badgeTextValue ? 'value here' : props.badgeTextValue}
      </Badge>
    </Button>
  );
};

interface ButtonGroupComponentProps {
  onClickbutton1?: () => void;
  onClickbutton2?: () => void;
  onClicbutton3?: () => void;
  buttonText1?: string;
  buttonText2?: string;
  buttonText3?: string;
  buttonVariant1?:
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
  buttonVariant2?:
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
  buttonVariant3?:
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
  buttonSize1?: 'lg' | 'sm';
  buttonSize2?: 'lg' | 'sm';
  buttonSize3?: 'lg' | 'sm';
  buttonDisabled1?: boolean;
  buttonDisabled2?: boolean;
  buttonDisabled3?: boolean;
  buttongActive1?: boolean;
  buttongActive2?: boolean;
  buttongActive3?: boolean;
}

export const ButtonGroupComponent: React.FC<ButtonGroupComponentProps> = (
  props: any
): any => {
  return (
    <ButtonGroup>
      <Button
        className="text-right"
        onClick={
          !props.onClickbutton1
            ? () => {
                alert('use the onClick prop to add your own function here');
              }
            : props.onClickbutton1
        }
        variant={!props.buttonVariant1 ? 'secondary ' : props.buttonVariant1}
        type="submit"
        size={!props.buttonSize1 ? '' : props.buttonSize1}
        disabled={!props.buttonDisabled1 ? false : props.buttonDisabled1}
        active={!props.buttongActive1 ? false : props.buttongActive1}
      >
        {!props.buttonText1 ? 'text change 1  here' : props.buttonText1}
      </Button>
      <Button
        className="text-right"
        onClick={
          !props.onClickbutton2
            ? () => {
                alert('use the onClick prop to add your own function here');
              }
            : props.onClickbutton2
        }
        variant={!props.buttonVariant2 ? 'secondary ' : props.buttonVariant2}
        type="submit"
        size={!props.buttonSize2 ? '' : props.buttonSize2}
        disabled={!props.buttonDisabled2 ? false : props.buttonDisabled2}
        active={!props.buttongActive2 ? false : props.buttongActive2}
      >
        {!props.buttonText2 ? 'text change 2  here' : props.text2}
      </Button>
      <Button
        className="text-right"
        onClick={
          !props.onClickbutton3
            ? () => {
                alert('use the onClick prop to add your own function here');
              }
            : props.onClickbutton3
        }
        variant={!props.buttonVariant3 ? 'secondary ' : props.buttonVariant3}
        type="submit"
        size={!props.buttonSize3 ? '' : props.buttonSize3}
        disabled={!props.buttonDisabled3 ? false : props.buttonDisabled3}
        active={!props.buttongActive3 ? false : props.buttongActive3}
      >
        {!props.buttonText3 ? 'text change here 3' : props.buttonText3}
      </Button>
    </ButtonGroup>
  );
};

interface CardComponentProps {
  onClick?: () => void;
  text?: string;
  cardTitle: string;
  cardDescription: string;
  cardStyle: {};
  cardImage: string;
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

export const CardComponent: React.FC<Props> = (props: any): any => {
  return (
    <Card style={!props.cardStyle ? { width: '18rem' } : props.cardStyle}>
      <Card.Img
        variant="top"
        src={
          !props.cardImage
            ? 'https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc'
            : props.cardImage
        }
      />
      <Card.Body>
        <Card.Title>
          {!props.cardTitle ? 'Card Title Change Here ' : props.cardTitle}
        </Card.Title>
        <Card.Text>
          {!props.cardDescription
            ? 'Card Description Change Here '
            : props.cardDescription}
        </Card.Text>
        <Button
          onClick={
            !props.onClick
              ? () => {
                  alert('use the onClick prop to add your own function here');
                }
              : props.onClick
          }
          variant={!props.variant ? 'secondary ' : props.variant}
        >
          {!props.text ? 'Text Here ' : props.text}
        </Button>
      </Card.Body>
    </Card>
  );
};

interface CarouselComponentProps {
  cardImage1: string;
  cardImage2: string;
  cardImage3: string;
  altImage1: string;
  altImage2: string;
  altImage3: string;
  className1: string;
  className2: string;
  className3: string;
  SlideLable1: string;
  SlideLable2: string;
  SlideLable3: string;
  SlideLableDescription1: string;
  SlideLableDescription2: string;
  SlideLableDescription3: string;
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
}

export const CarouselComponent: React.FC<CarouselComponentProps> = (
  props: any
): any => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className={!props.className1 ? 'd-block w-100' : props.className1}
          src={
            !props.cardImage1
              ? 'https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc'
              : props.cardImage1
          }
          alt={!props.altImage1 ? 'alt image 1' : props.altImage1}
        />
        <Carousel.Caption>
          <h3>
            {!props.SlideLable1 ? 'First slide label' : props.SlideLable1}
          </h3>
          <p>
            {' '}
            {!props.SlideLableDescription1
              ? 'First Slide Description'
              : props.SlideLableDescription1}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={!props.className2 ? 'd-block w-100' : props.className2}
          src={
            !props.cardImage2
              ? 'https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc'
              : props.cardImage2
          }
          alt={!props.altImage1 ? 'alt image 2' : props.altImage1}
        />
        <Carousel.Caption>
          <h3>
            {!props.SlideLable2 ? 'Second slide label' : props.SlideLable2}
          </h3>
          <p>
            {!props.SlideLableDescription3
              ? 'Second Slide Description'
              : props.SlideLableDescription3}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={!props.className3 ? 'd-block w-100' : props.className3}
          src={
            !props.cardImage3
              ? 'https://media-exp1.licdn.com/dms/image/C560BAQHgMOc88iPV6g/company-logo_200_200/0/1578911344580?e=2159024400&v=beta&t=WfQV2bAVy28VrvjaVFELLmOHYSgYjXtMte1e0cEGpJc'
              : props.cardImage3
          }
          alt={!props.altImage3 ? 'alt image 1' : props.altImage3}
        />
        <Carousel.Caption>
          <h3>
            {!props.SlideLable3 ? 'Third slide label' : props.SlideLable3}
          </h3>
          <p>
            {!props.SlideLableDescription3
              ? 'Third Slide Description'
              : props.SlideLableDescription3}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

interface CloseButtonProps {
  onClick?: () => void;
  text?: string;
  variant?: 'white';
  disabled?: boolean;
  className: string;
}

export const CloseButtonComponent: React.FC<Props> = (props: any): any => {
  return (
    <div className={!props.className ? 'bg-dark p-3' : props.className}>
      <CloseButton
        variant={!props.variant ? 'white' : props.variant}
        disabled={!props.variant ? false : props.variant}
        onClick={
          !props.onClick
            ? () => {
                alert('put your function here');
              }
            : props.onClick
        }
      />
    </div>
  );
};
