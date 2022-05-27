import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import auth from './utils/firebase';

import Navbar from './components/nav/Navbar';
import Products from './views/Products';
import Shelves from './views/Shelves';

function App() {
  useEffect(() => {
    async function loadData() {
      let authMethods = await auth();
      const login = await authMethods.authInit();
    }
    loadData();
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/shelves" element={<Shelves />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
