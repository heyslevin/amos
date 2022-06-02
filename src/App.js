import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import amosTheme from './styles/amosTheme';

import { auth } from './utils/firebase';

import Navbar from './components/nav/Navbar';
import Products from './views/Products';
import Shelves from './views/Shelves';
import Profile from './views/Profile';

function App() {
  const [shelfId, setShelfId] = useState();

  useEffect(() => {
    async function loadData() {
      let authMethods = await auth();
      const login = await authMethods.authInit();
    }
    loadData();
  }, []);

  return (
    <ChakraProvider theme={amosTheme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shelves setShelfId={setShelfId} />} />
        <Route path="/shelves" element={<Shelves setShelfId={setShelfId} />} />
        <Route path="/products" element={<Products shelfId={shelfId} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
