import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarEdit from '../components/nav/NavbarEdit';

export default function Admin({ category }) {
  return (
    <React.Fragment>
      <NavbarEdit category={category} />
      <Outlet />
    </React.Fragment>
  );
}
