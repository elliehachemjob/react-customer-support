// @ts-ignore
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
interface Props {
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

export const ButtonComponent: React.FC<Props> = (props: any): any => {
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
