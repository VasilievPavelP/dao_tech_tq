import React, { useId } from 'react';
import { Search } from 'tabler-icons-react';

interface SearchFieldProps extends
  React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  searchIconSize?: number
}

const SearchField:React.FC<SearchFieldProps> = ({
  label,
  searchIconSize,
  ...props
}) => {
  const id = useId();
  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className="form-label"
        >
          {label}
        </label>
      )}
      <div className="input-group mb-3">
        <span
          className="input-group-text"
          id="basic-addon1"
        >
          <Search size={searchIconSize} />
        </span>
        <input
          {...props}
          type="text"
          id={id}
          className="form-control"
        />
      </div>
    </>
  );
};

SearchField.defaultProps = {
  label: '',
  searchIconSize: 18,
};

export default SearchField;
