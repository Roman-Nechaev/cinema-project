import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  HiOutlineBookmark,
  HiOutlineBookmarkAlt,
  HiOutlinePlay,
} from 'react-icons/hi';

export const WrapperBtnFollowing = styled.div`
  /* position: absolute; */
`;

export const Bookmark = styled(HiOutlineBookmark)`
  position: absolute;
  top: -8px;
  left: -40px;
  color: #ffffff;
  width: 25px;
  height: 25px;
  transition: 0.5s;

  cursor: pointer;
  @media screen and (min-width: 768px) {
    top: 111px;
    left: 18px;
  }
  :hover {
    color: #3cd95b;
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
  transition: 0.5s;

  @media screen and (min-width: 768px) {
    top: 111px;
    left: 18px;
  }
  :hover {
    color: #ff3300;
  }
`;

export const ItemImg = styled.img`
  min-width: 94px;
  width: 94px;
  height: 141px;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

export const PlayIcon = styled(HiOutlinePlay)`
  position: absolute;
  top: -10px;
  right: 90px;
  color: #cfd0d0;
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: 0.5s;

  @media screen and (min-width: 768px) {
    opacity: 0;
    top: 0;
    right: 0;
    border-radius: 5px;

    background: rgba(13, 255, 122, 0.25);
    backdrop-filter: blur(8px);
  }
  :hover {
    opacity: 1;
    color: #3cd95b;
  }
`;

export const LinkSt = styled(Link)`
  display: flex;
  width: calc(100vw - 42px);
  max-width: calc(100vw - 42px);

  border-radius: 5px;
  overflow: hidden;

  background-color: #1b283f;

  cursor: pointer;
  transition: 0.5s;

  @media screen and (min-width: 768px) {
    flex-direction: column;

    flex-basis: 270px;
    max-width: 200px;
    min-height: 400px;
  }

  :hover,
  :focus {
    /* background-color: #00619a;
    box-shadow: 0px 6px 22px 3px rgba(0, 208, 255, 0.73); */
    + ${PlayIcon} {
      opacity: 1;
      color: #e1af0e;
    }
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
    background-color: #00619a;
    box-shadow: 0px 6px 22px 3px rgba(0, 208, 255, 0.73);
    + ${PlayIcon} {
      opacity: 1;
      color: #e1af0e;
    }
  }
`;

export const Date = styled.span`
  font-size: 0.9em;
  color: #989898;
`;

export const Details = styled.div`
  display: flex;
  padding: 10px;

  flex-wrap: wrap;
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
