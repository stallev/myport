import React from 'react';
import cx from 'classnames';

import styles from './styles/_textarea.module.scss';

const Textarea = ({
  placeholder,
  validation,
  onChange,
  className
}) => {

  return (
    <div
      className={cx(
        styles.textarea,
        className
      )}
    >
      <textarea
        placeholder={placeholder}
        className={cx(
          styles.textarea__field,
        )}
        {...validation}
        onChange={onChange || (validation && validation.onChange)}
      />
    </div>
  );
};

export default Textarea;