import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarEdit from '../components/nav/NavbarEdit';

export default function Admin({ shelf }) {
  return (
    <React.Fragment>
      <NavbarEdit shelf={shelf} />
      <Outlet />
    </React.Fragment>
  );
}
