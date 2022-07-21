import React from 'react';
import cx from 'classnames';

import styles from './styles/_input.module.scss';

const Input = ({
  placeholder,
  inputType,
  validation,
  maxLength,
  onChange,
  className
}) => {

  return (
    <div
      className={cx(
        styles.input,
        className
      )}
    >
      <input
        type={inputType}
        placeholder={placeholder}
        maxLength={maxLength}
        className={cx(
          styles.input__field,          
        )}
        {...validation}
        onChange={onChange || (validation && validation.onChange)}
      />
    </div>
  );
};

export default Input;