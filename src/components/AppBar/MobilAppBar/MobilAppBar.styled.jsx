// import styled from '@emotion/styled';
import styled from 'styled-components';

import { HiOutlineMenu, HiSearch, HiUser } from 'react-icons/hi';

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
