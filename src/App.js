import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import amosTheme from './styles/amosTheme';

import { auth } from './utils/firebase';

import Navbar from './components/nav/Navbar';
import Products from './views/Products';
import Shelves from './views/Shelves';
import Profile from './views/Profile/Profile';
import MyShelves from './views/Profile/MyShelves';
import MyProducts from './views/Profile/MyProducts';
import NewShelf from './views/Edit/NewShelf';
import User from './views/User';
import Admin from './views/Admin';

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
      <Routes>
        <Route path="/" element={<User />}>
          <Route
            path="/shelves"
            element={<Shelves setShelfId={setShelfId} />}
          />
          <Route path="/products" element={<Products shelfId={shelfId} />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="my-shelves" element={<MyShelves />} />
            <Route path="my-products" element={<MyProducts />} />
          </Route>
        </Route>

        <Route path="/my-shelves/edit" element={<Admin />}>
          <Route path="new-shelf" element={<NewShelf />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
