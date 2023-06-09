import styled from 'styled-components';

import {
  MdOutlineClose,
  MdOutlineCancel,
  MdOutlineAssistantDirection,
  MdArrowBackIosNew,
  MdOutlineGTranslate,
  MdGTranslate,
  MdClose,
} from 'react-icons/md';

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

export const CloseIcon = styled(MdOutlineCancel)`
  position: relative;
  width: 45px;
  height: 45px;
  border-radius: 50%;

  top: -215px;
  left: 40px;
  cursor: pointer;
  color: #ffffff;
  transition: 0.5s;
  @media screen and (max-width: 768px) {
    top: -190px;
  }
  :hover {
    background-color: #0088ff;
    color: #00ff95;
  }
`;
