import styled from 'styled-components';

import { GiCrossMark } from 'react-icons/gi';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1200;
  cursor: pointer;
  overflow: hidden;
`;

export const CloseIcon = styled(GiCrossMark)`
  position: relative;
  width: 45px;
  height: 45px;
  border-radius: 50%;

  top: -230px;
  left: 20px;
  cursor: pointer;
  color: #ffffff;
  transition: 0.5s;
  @media screen and (max-width: 768px) {
    top: -170px;
  }
  :hover {
    background-color: #0088ff;
    color: #00ff95;
  }
`;
