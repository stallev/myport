import React from 'react';
import Container from '../Container';

import styles from './styles/_header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container
        className="header"
      >
        <div className={styles['header__nav-wrap']}>
          <nav
            className={styles.header__nav}
          >
            
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;