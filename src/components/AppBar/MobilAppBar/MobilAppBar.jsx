import { Link } from 'react-router-dom';

import ffLogo from '../../../assets/logo/ff.png';

import {
  LogoImg,
  ManageSearch,
  HomeIcon,
  NavigateList,
  NavLinks,
  FavoriteIcon,
  AccountsIcon,
} from './MobilAppBar.styled';

export const MobilAppBar = () => {
  return (
    <>
      <NavigateList>
        <NavLinks to="/popular">
          <HomeIcon />
        </NavLinks>

        <NavLinks to="/search">
          <ManageSearch />
        </NavLinks>

        <Link to="/">
          <LogoImg src={ffLogo} alt="logo" />
        </Link>

        <NavLinks to="/favorites">
          <FavoriteIcon />
        </NavLinks>
        <NavLinks to="home">
          <AccountsIcon />
        </NavLinks>
      </NavigateList>
    </>
  );
};
