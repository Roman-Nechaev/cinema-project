import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { MdOutlineClose } from 'react-icons/md';

export const CastScrolled = styled.div`
  width: 55%;
  margin: 0 auto;

  padding-left: 20px;
  padding-right: 20px;
  border-radius: 18px;
  backdrop-filter: blur(25px);

  background: rgba(255, 255, 255, 0.25);
  z-index: 999999;
`;

export const Ul = styled.ul`
  overflow-y: hidden;
  overflow-x: scroll;
  margin-left: -10px;
  margin-top: -10px;
  padding-bottom: 10px;
  & {
    list-style-type: none;
    list-style-position: inside;
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
    top: 0;
    left: 0;
  }
  & {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 10px;
    padding-inline-start: 10px;
  }
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const LiCard = styled.li`
  margin-top: 10px;
  margin-bottom: 15px;
  margin-left: 10px;
  margin-right: 4px;
  border: 1px solid rgba(227, 227, 227, 1);

  border-radius: 8px;
  overflow: hidden;

  min-width: 140px;
  width: 140px;

  @media screen and (min-width: 900px) {
    min-width: 140px;
  }
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Img = styled.img`
  min-width: 100%;
`;

export const Name = styled.p`
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 0;
  color: #ffffff;
  text-align: center;
`;

export const Character = styled.p`
  padding-top: 5px;
  text-align: center;
  font-size: 0.9em;
  color: #000000;
`;

export const LinkClose = styled(Link)`
  position: absolute;
  color: #ffffff;
  top: -50px;
  right: 90px;
  text-shadow: 1px 0 1px #000, 0 1px 1px #000, -1px 0 1px #000, 0 -1px 1px #000;

  cursor: pointer;
`;

export const CloseIcon = styled(MdOutlineClose)`
  width: 40px;
  height: 40px;

  :hover {
    color: #0088ff;
  }
`;
