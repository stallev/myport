import React from 'react';
import cx from 'classnames';

import styles from './styles/_input.module.scss';

const Input = ({
  placeholder,
  inputType,
  validation,
  onChange,
  className
}) => {

  return (
    <div
      className={cx(
        styles.input
      )}
    >
      <input
        type={inputType}
        placeholder={placeholder}
        className={cx(
          styles.input__field,
          className
        )}
        name={validation && validation.name}
        onChange={onChange || (validation && validation.onChange)}
      />
    </div>
  );
};

export default Input;