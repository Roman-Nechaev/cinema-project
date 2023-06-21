import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { MdOutlineClose } from 'react-icons/md';

const setFlag = props => {
  return !props.flag ? 'ani 1s forwards' : 'hide 1s forwards';
};

export const CastScrolled = styled.div`
  position: fixed;

  bottom: 30px;
  left: 0;
  width: 200px;
  padding-left: 40px;
  padding-right: 40px;

  backdrop-filter: blur(25px);

  background: rgba(255, 255, 255, 0.25);

  width: 100%;

  /* bottom: -170px; */

  /* animation: ani 1s forwards; */
  /* animation: ${setFlag}; */

  transform: translateY(50%);

  @keyframes ani {
    0% {
      bottom: -10%;

      transform: translateY(50%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes hide {
    0% {
      transform: translateY(0);
    }
    100% {
      bottom: -100%;

      transform: translateY(50%);
      /* opacity: 0; */
    }
  }
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
`;

export const LiCard = styled.li`
  /* margin-top: 10px; */
  margin-bottom: 15px;
  margin-left: 10px;
  margin-right: 4px;
  border: 1px solid rgba(227, 227, 227, 1);
  /* padding-bottom: 10px; */
  border-radius: 8px;
  overflow: hidden;
  min-width: 20%;

  @media screen and (min-width: 900px) {
    min-width: 140px;
  }
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Img = styled.img`
  min-width: 100%;
  /* height: 200px; */
`;

export const Name = styled.p`
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 0;
  color: #4e4e4e;
  text-align: center;
`;

export const Character = styled.p`
  padding-top: 5px;
  text-align: center;
  font-size: 0.9em;
  color: #4e4e4e;
  /* padding-left: 8px; */
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
