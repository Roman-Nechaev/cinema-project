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
  z-index: 0;
`;

export const Header = styled.header`
  /* border: 1px solid #40ff00; */

  position: fixed;
  display: flex;
  padding: 20px 30px;
  justify-content: space-between;

  width: 100%;
  z-index: 99;
  background: rgba(255, 255, 255, 0.085);
  backdrop-filter: blur(3px);

  align-items: center;
  @media screen and (min-width: 768px) {
    /* justify-content: flex-start; */
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
  /* display: flex; */
  /* justify-content: end; */
  /* z-index: 1; */
  font-size: 1.3em;
  & .active {
    /* color: #56e6d5; */

    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #56e6d5,
      0 0 30px #56e6d5, 0 0 40px #56e6d5, 0 0 55px #56e6d5, 0 0 75px #56e6d5;
  }
`;

export const NavLinks = styled(NavLink)`
  color: #ffffff;
  margin-left: 10px;
  transition: all 0.5s;

  :hover {
    color: #56e6d5;
  }
`;
