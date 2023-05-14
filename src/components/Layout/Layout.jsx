// import { Home } from '../../pages/Home/Home';

import { Background } from './Layout.styled';

import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Background>
      <AppBar />

      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <h1>Body</h1>
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </Background>
  );
};
