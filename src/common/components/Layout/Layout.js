import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Container } from '../../components/'

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;