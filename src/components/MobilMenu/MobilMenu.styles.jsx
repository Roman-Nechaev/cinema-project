import styled from 'styled-components';

import { HiOutlineX } from 'react-icons/hi';

export const WrapperMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;

  z-index: 10;
`;

export const MenuClose = styled(HiOutlineX)`
  color: #ffffff;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
