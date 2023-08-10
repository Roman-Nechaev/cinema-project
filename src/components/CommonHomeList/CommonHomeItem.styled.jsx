import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { MdOutlineBookmarkBorder, MdOutlineBookmark } from 'react-icons/md';

export const ItemImg = styled.img`
  min-width: 94px;
  width: 94px;
  height: 141px;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 230px;
  }
`;

export const LinkSt = styled(Link)`
  display: flex;
  /* width: calc(100vw - 22px);
  max-width: calc(100vw - 22px); */

  border-radius: 5px;
  /* overflow: hidden; */

  /* background-color: #1b283f; */

  cursor: pointer;
  transition: 0.5s;

  @media screen and (min-width: 768px) {
    flex-direction: column;

    /* flex-basis: 270px; */
    width: 180px;
    /* height: 180px; */
  }

  :hover,
  :focus {
    /* background-color: #00619a;
    box-shadow: 0px 6px 22px 3px rgba(0, 208, 255, 0.73); */
  }
`;

export const ListItem = styled.li`
  position: relative;
  margin: 10px;
  /* overflow: hidden; */
  border-radius: 15px;

  transition: 0.5s;
  :hover,
  :focus {
    /* background-color: #00619a; */
  }
`;

export const Title = styled.h2`
  font-size: 1em;
  color: #ffffff;
  /* margin-top: 2px; */
  text-align: center;
`;

export const Date = styled.span`
  font-size: 0.9em;
  color: #989898;
`;

export const Details = styled.div`
  /* display: flex; */
  padding: 10px;

  /* flex-wrap: wrap; */
`;

export const Overview = styled.p`
  font-size: 0.9em;
  line-height: 1.2em;
  text-align: end;
  color: #e0e0e0;
`;

export const WrapperProgressbar = styled.div`
  position: absolute;
  bottom: 115px;
  right: -3px;

  @media screen and (min-width: 768px) {
    bottom: 79px;
    right: -10px;
  }
`;
