import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';

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

  overflow: hidden;
`;

export const CloseIcon = styled(MdOutlineClose)`
  position: relative;
  width: 35px;
  height: 35px;

  top: -230px;
  left: 40px;

  color: #ffffff;
  :hover {
    color: #0088ff;
  }
`;
