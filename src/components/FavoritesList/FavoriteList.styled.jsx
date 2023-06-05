import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiOutlineBookmark, HiOutlineBookmarkAlt } from 'react-icons/hi';

export const WrapperPagination = styled.div`
  display: table;
  margin: 0 auto;
  margin-top: 20px;
`;
export const Wrapper = styled.div``;

export const WrapperList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    max-width: 1200px;
    justify-content: space-around;

    flex-wrap: wrap;
  }
`;

export const LinkSt = styled(Link)`
  /* border: 1px solid #40ff00; */
  display: flex;
  width: calc(100vw - 42px);
  max-width: calc(100vw - 42px);

  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */

  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;

  cursor: pointer;

  background-color: #1b283f;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    margin: 10px;
    /* flex-basis: 270px; */
    max-width: 200px;
  }
  transition: 0.5s;
  :hover,
  :focus {
    background-color: #00619a;
    box-shadow: 0px 6px 22px 3px rgba(0, 208, 255, 0.73);
  }
`;
export const ListItem = styled.li``;

export const ItemImg = styled.img`
  min-width: 94px;
  width: 94px;
  height: 141px;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
  :hover,
  :focus {
    background-color: #00619a;
  }
`;

export const Details = styled.div`
  padding: 10px;
  display: flex;
  /* align-content: center; */
  /* align-items: center; */
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  font-size: 1em;
  color: #ffffff;
  /* margin-bottom: 5px; */
`;

export const Date = styled.span`
  font-size: 0.9em;
  color: #989898;
`;

export const Overview = styled.p`
  font-size: 0.9em;
  line-height: 1.2em;
  text-align: end;
  color: #e0e0e0;
`;
export const WrapperBtnFollowing = styled.div``;

export const Bookmark = styled(HiOutlineBookmark)`
  position: relative;
  top: 40px;
  left: 20px;
  color: #ffffff;
  width: 30px;
  height: 30px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
    top: 52px;
    left: 500px;
  }
`;

export const BookmarkOk = styled(HiOutlineBookmarkAlt)`
  position: relative;
  top: 40px;
  left: 20px;
  color: #ffffff;
  width: 30px;
  height: 30px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
    top: 52px;
    left: 500px;
  }
`;
