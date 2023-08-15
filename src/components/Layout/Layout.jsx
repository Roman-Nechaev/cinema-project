import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from '../AppBar/AppBar';
import { BtnLocales } from '../BtnLocales/BtnLocales';

import { Background, Container } from './Layout.styled';

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
    </Background>
  );
};
