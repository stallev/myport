import React from 'react';
import cx from 'classnames';

import styles from './styles/_button.module.scss';

const Button = ({
  label,
  isSubmit,
  onClick,
  className
}) => {
  console.log("Button111")
  return (
    <div
      className={cx(
        styles.button
      )}
    >
      <button
        type={isSubmit ? "submit" : "button"}
        className={cx(
          styles.button__field,
          className
        )}
        onClick={onClick && onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;