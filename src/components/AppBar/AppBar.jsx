import { useMedia } from 'react-use';
import { Link } from 'react-router-dom';

import { Header, LogoImg, NavLinks, NavigateList } from './AppBar.styled';
import { MobilAppBar } from './MobilAppBar/MobilAppBar';

import foundFilmsLogo from '../../assets/logo/foundfilms-logo.png';

export const AppBar = () => {
  const isWide = useMedia('(min-width: 768px)');

  return (
    <Header>
      {!isWide ? (
        <MobilAppBar />
      ) : (
        <>
          <Link to="/">
            <LogoImg src={foundFilmsLogo} alt="Logo" />
          </Link>
          <NavigateList>
            <NavLinks to="/">Home</NavLinks>
            <NavLinks to="/popular">Popular</NavLinks>
            <NavLinks to="/search">Search</NavLinks>
            <NavLinks to="/favorites">Favorites</NavLinks>
          </NavigateList>
          {/* <div>
            <p>log</p>
          </div> */}
        </>
      )}
    </Header>
  );
};
