import React from 'react';

interface ButtonLinkProps extends
  React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    size?: 'sm' | 'md' | 'lg'
}

const Button:React.FC<ButtonLinkProps> = ({
  children, size, ...props
}) => (
  <button className={`btn btn-link btn-${size}`} type="button" {...props}>
    {children}
  </button>
);

Button.defaultProps = {
  size: 'md',
};

export default Button;
