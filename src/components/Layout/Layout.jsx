import { Background, Container } from './Layout.styled';

import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { BtnLocales } from '../BtnLocales/BtnLocales';

export const Layout = () => {
  return (
    <Background>
      <AppBar />

      <main>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
        <BtnLocales />
      </main>
      <footer>{/* <h2>Footer</h2> */}</footer>
    </Background>
  );
};
