import { SystemColors } from 'app/types';
import clsx from 'clsx';
import React from 'react';

interface ButtonLinkProps extends
  React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    size?: 'sm' | 'md' | 'lg'
    color?: SystemColors
}

const Button:React.FC<ButtonLinkProps> = ({
  children, size, className, color, ...props
}) => (
  <button
    className={clsx(`btn btn-${size} btn-${color}`, className)}
    type="button"
    {...props}
  >
    {children}
  </button>
);

Button.defaultProps = {
  size: 'md',
  color: 'primary',
};

export default Button;
