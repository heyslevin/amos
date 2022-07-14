import { Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/nav/Navbar';

export default function User({ userData }) {
  return (
    <React.Fragment>
      <Navbar userData={userData} />
      <Outlet />
    </React.Fragment>
  );
}
