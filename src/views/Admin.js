import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarEdit from '../components/nav/NavbarEdit';

export default function Admin({ adminNavTitle }) {
  return (
    <React.Fragment>
      <NavbarEdit adminNavTitle={adminNavTitle} />
      <Outlet />
    </React.Fragment>
  );
}
