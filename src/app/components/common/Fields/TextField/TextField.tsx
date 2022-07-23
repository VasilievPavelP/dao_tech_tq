import clsx from 'clsx';
import React, { useId } from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const TextField: React.FC<TextFieldProps> = ({ className, ...props }) => {
  const id = useId();
  return (
    <div className="mb-3">
      <label
        htmlFor={id}
        className="form-label"
      >
        Email address
        <input
          id={id}
          className={clsx('form-control', className)}
          {...props}
        />
      </label>
    </div>
  );
};

TextField.defaultProps = {
  className: '',
};

export default TextField;
