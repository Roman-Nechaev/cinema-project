// import styled from '@emotion/styled';
import styled from 'styled-components';

import { HiOutlineMenu, HiSearch, HiUser } from 'react-icons/hi';

import {
  MdManageSearch,
  MdOutlineHome,
  MdOutlineBookmarkBorder,
  MdManageAccounts,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export const ImgBg = styled.img`
  position: absolute;

  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  z-index: -1;
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
  padding: 3px;
  /* margin-left: 10px; */
  width: 40px;
  height: 40px;
  background-color: #ffffff45;
  border-radius: 50%;

  /* z-index: 1; */
`;

export const ManageSearch = styled(MdManageSearch)`
  color: #ffffff;
  width: 30px;
  height: 30px;
  transition: all 0.5s;
`;

export const HomeIcon = styled(MdOutlineHome)`
  color: #ffffff;
  width: 30px;
  height: 30px;
  transition: all 0.5s;
`;

export const FavoriteIcon = styled(MdOutlineBookmarkBorder)`
  color: #ffffff;
  width: 30px;
  height: 30px;
  transition: all 0.5s;
`;

export const AccountsIcon = styled(MdManageAccounts)`
  color: #ffffff;
  width: 30px;
  height: 30px;
  transition: all 0.5s;
`;

export const NavigateList = styled.nav`
  /* margin-left: 20px; */
  /* margin: 0 auto; */
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  /* z-index: 1; */
  transition: all 0.5s;
  & .active {
    color: #56e6d5;

    & svg {
      -shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #56e6d5,
        0 0 30px #56e6d5, 0 0 40px #56e6d5, 0 0 55px #56e6d5, 0 0 75px #56e6d5;
      /* fill: #ff0000; */
      color: #56e6d5;
    }
  }
`;

export const NavLinks = styled(NavLink)`
  color: #ffffff;
  /* margin-left: 10px; */

  :hover {
    color: #56e6d5;
    & svg {
      color: #56e6d5;
    }
  }
`;
