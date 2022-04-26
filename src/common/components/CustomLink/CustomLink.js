import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import styles from './styles/_custom-link.module.scss';

const CustomLink = ({
  label,
  className,
  to
}) => {
  return (
    <div
      className={cx(
        styles['custom-link'],
        className
      )}
    >
      <Link
        to={to}
        className={cx(
          'custom-link',
          className
        )}
      >
        {label}
      </Link> 
    </div>
  );
};

export default CustomLink;