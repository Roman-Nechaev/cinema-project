// import styled from '@emotion/styled';
import styled from 'styled-components';

import { HiOutlineMenu, HiSearch, HiUser } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

export const ImgBg = styled.img`
  position: absolute;

  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  z-index: -1;
`;

export const Header = styled.header`
  border: 1px solid #40ff00;
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;

  width: 100%;
  /* height: 65px; */
  align-items: center;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const BurgerMenu = styled(HiOutlineMenu)`
  color: #ffffff;
  width: 22px;
  height: 22px;
`;

export const SearchIcon = styled(HiSearch)`
  color: #ffffff;
  width: 22px;
  height: 22px;
`;

export const UserIcon = styled(HiUser)`
  color: #ffffff;
  width: 22px;
  height: 22px;
`;

export const LogoImg = styled.img`
  /* padding: 3px; */
  /* margin-left: 10px; */
  width: 175px;
  height: 40px;
  /* background-color: #ffffff45; */

  /* z-index: 1; */
`;

export const NavigateList = styled.nav`
  margin-left: 20px;
  /* flex: 1 1 auto; */
  /* z-index: 1; */
`;

export const NavLinks = styled(NavLink)`
  color: #ffffff;
  margin-left: 10px;
`;
