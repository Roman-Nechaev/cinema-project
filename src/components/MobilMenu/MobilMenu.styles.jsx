import styled from 'styled-components';

import { HiOutlineX } from 'react-icons/hi';

export const WrapperMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  background-color: #000000;

  background-size: cover;
  z-index: 10;
`;

export const MenuClose = styled(HiOutlineX)`
  color: #ffffff;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
