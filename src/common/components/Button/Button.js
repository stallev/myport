import React from 'react';
import cx from 'classnames';

import styles from './styles/_button.module.scss';

const Button = ({
  label,
  isSubmit,
  onClick,
  className
}) => {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className={cx(
        styles.button,
        className
      )}
      onClick={onClick && onClick}
    >
      {label}
    </button>
  );
};

export default Button;