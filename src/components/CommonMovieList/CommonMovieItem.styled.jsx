import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  HiOutlineBookmark,
  HiOutlineBookmarkAlt,
  HiOutlinePlay,
} from 'react-icons/hi';

// !

export const WrapperBtnFollowing = styled.div`
  /* position: absolute; */
`;

export const ListItem = styled.li`
  position: relative;
`;

export const Bookmark = styled(HiOutlineBookmark)`
  position: absolute;
  top: -8px;
  left: -40px;
  color: #ffffff;
  width: 25px;
  height: 25px;

  cursor: pointer;
  @media screen and (min-width: 768px) {
    /* width: 25px; */
    /* height: 25px; */
    top: 100px;
    left: 5px;
  }
`;

export const BookmarkOk = styled(HiOutlineBookmarkAlt)`
  position: absolute;
  top: -8px;
  left: -40px;
  color: #ffffff;
  width: 25px;
  height: 25px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    top: 100px;
    left: 5px;
  }
`;

export const PlayIcon = styled(HiOutlinePlay)`
  position: absolute;
  top: 8px;
  right: 90px;
  color: #cfd0d0;
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: 0.5s;
  @media screen and (min-width: 768px) {
    top: 345px;
    right: 1px;
  }
  :hover {
    color: #006eff;
  }
`;

export const Date = styled.span`
  font-size: 0.9em;
  color: #989898;
`;

export const Details = styled.div`
  padding: 10px;
  display: flex;

  flex-wrap: wrap;
`;

export const ItemImg = styled.img`
  min-width: 94px;
  width: 94px;
  height: 141px;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 300px;
  }
  :hover,
  :focus {
    background-color: #00619a;
  }
`;

export const LinkSt = styled(Link)`
  /* border: 1px solid #40ff00; */
  display: flex;
  width: calc(100vw - 42px);
  max-width: calc(100vw - 42px);
  /* height: 90%; */

  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */

  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;

  cursor: pointer;

  background-color: #1b283f;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    margin: 10px;
    flex-basis: 270px;
    max-width: 200px;
    min-height: 400px;
  }
  transition: 0.5s;
  :hover,
  :focus {
    background-color: #00619a;
    box-shadow: 0px 6px 22px 3px rgba(0, 208, 255, 0.73);
  }
`;

export const Overview = styled.p`
  font-size: 0.9em;
  line-height: 1.2em;
  text-align: end;
  color: #e0e0e0;
`;

export const Title = styled.h2`
  font-size: 1em;
  color: #ffffff;
  /* margin-bottom: 5px; */
`;

export const WrapperProgressbar = styled.div`
  position: absolute;
  bottom: 90px;
  right: -3px;
  /* bottom: 100%; */
`;
