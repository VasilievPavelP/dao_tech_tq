import clsx from 'clsx';
import React, { useId } from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  classNameInput?: string;
  classNameInputBox?: string;
  classNameLabel?: string;
  label?: string
}

const TextField: React.FC<TextFieldProps> = ({
  classNameInput,
  classNameInputBox,
  classNameLabel,
  label,
  ...props
}) => {
  const id = useId();
  return (
    <div className={classNameInputBox}>
      {label && (
        <label
          htmlFor={id}
          className={clsx('form-label', classNameLabel)}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={clsx('form-control', classNameInput)}
        {...props}
      />
    </div>
  );
};

TextField.defaultProps = {
  classNameInput: undefined,
  classNameInputBox: undefined,
  classNameLabel: undefined,
  label: '',
};

export default TextField;
