import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarEdit from '../components/nav/NavbarEdit';

export default function Admin() {
  return (
    <React.Fragment>
      <NavbarEdit />
      <Outlet />
    </React.Fragment>
  );
}
