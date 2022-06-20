import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import amosTheme from './styles/amosTheme';

import { auth } from './utils/firebase';

import Navbar from './components/nav/Navbar';
import Products from './views/Products';
import UserShelves from './views/UserShelves';
import Profile from './views/Profile/Profile';
import MyShelves from './views/Profile/MyShelves';
import MyProducts from './views/Profile/MyProducts';
import NewShelf from './views/Edit/NewShelf';
import NewProduct from './views/Edit/NewProduct';
import User from './views/User';
import Admin from './views/Admin';
import ShelfView from './views/ShelfView';

function App() {
  const [shelfId, setShelfId] = useState();
  const [adminNavTitle, setAdminNavTitle] = useState();

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
            element={<UserShelves setShelfId={setShelfId} />}
          />
          <Route path="/products" element={<Products shelfId={shelfId} />} />
          <Route path="/shelf-view" element={<ShelfView shelfId={shelfId} />} />
          <Route path="/profile" element={<Profile />}>
            <Route
              path="my-shelves"
              element={<MyShelves setShelfId={setShelfId} />}
            />
            <Route path="my-products" element={<MyProducts />} />
          </Route>
        </Route>

        <Route
          path="/my-shelves/edit"
          element={<Admin adminNavTitle={adminNavTitle} />}
        >
          <Route
            path="new-shelf"
            element={<NewShelf setAdminNavTitle={setAdminNavTitle} />}
          />
          <Route
            path="new-product"
            element={
              <NewProduct
                shelfId={shelfId}
                setAdminNavTitle={setAdminNavTitle}
              />
            }
          />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
