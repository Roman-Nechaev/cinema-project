import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlineBookmark, HiOutlineBookmarkAlt } from 'react-icons/hi';

export const WrapperCards = styled.div`
  position: relative;
  top: 0;
  display: flex;

  min-height: 500px;
  @media screen and (min-width: 768px) {
    min-height: 800px;
  }
`;

export const WrapperBgImg = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100%;

  border-bottom: 1px solid rgb(67, 67, 67);
  background-size: cover;

  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url(${props.img})`};

  @media screen and (min-width: 768px) {
    background-position: left calc((50vw - 170px) - 340px) top;
  }
`;

export const BgGradient = styled.div`
  @media screen and (min-width: 768px) {
    min-width: 100%;
    min-height: 100%;
    background-image: linear-gradient(
      to right,
      rgba(52.5, 52.5, 73.5, 1) calc((50vw - 170px) - 340px),
      rgba(52.5, 52.5, 73.5, 0.84) 50%,
      rgba(52.5, 52.5, 73.5, 0.84) 100%
    );
  }
`;

export const ImgWrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 20%;
    left: 40px;

    min-width: 300px;
    width: 300px;
    height: 450px;
  }
`;

export const Img = styled.img`
  /* border: 2px solid rgb(0, 13, 255); */
  min-width: 100%;
  width: 100%;
  height: 100%;
  outline: none;
  display: block;
  border-radius: 15px;
`;

export const WrapperInfo = styled.div`
  position: absolute;

  bottom: 0;
  padding: 10px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(2px);
  border-radius: 20px 20px 0 0;
  @media screen and (min-width: 768px) {
    /* display: none; */

    background: rgba(255, 255, 255, 0);
    position: relative;
    border-radius: 20px;
    width: 400px;
    min-height: 300px;
    left: 350px;
    top: 30%;
  }
  @media screen and (min-width: 900px) {
    width: 550px;
  }
`;

export const Title = styled.h2`
  /* text-align: center; */
  font-size: 28px;
  padding-left: 10px;
  text-shadow: 1px 0 1px #000, 0 1px 1px #000, -1px 0 1px #000, 0 -1px 1px #000;
  @media screen and (min-width: 768px) {
    padding-left: 0px;
  }
`;

export const Genres = styled.p`
  /* margin-top: 10px; */
  /* margin-left: 50px; */
  text-align: center;

  color: #d1d1d1;
  text-shadow: 1px 0 1px #00000085, 0 1px 1px #00000085, -1px 0 1px #00000085,
    0 -1px 1px #00000085;

  span {
    padding-left: 5px;
  }
`;

export const Overview = styled.p`
  margin-top: 10px;
  text-shadow: 1px 0 1px #000, 0 1px 1px #000, -1px 0 1px #000, 0 -1px 1px #000;
  @media screen and (min-width: 768px) {
    position: fixed;
    bottom: 0;
  }
`;

export const LinkBack = styled(Link)`
  position: absolute;
  color: #ffffff;
  top: 90px;
  left: 10px;
  text-shadow: 1px 0 1px #000, 0 1px 1px #000, -1px 0 1px #000, 0 -1px 1px #000;

  cursor: pointer;
`;

export const Bookmark = styled(HiOutlineBookmark)`
  position: absolute;
  right: 15px;
  color: #ffffff;
  width: 22px;

  height: 22px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const BookmarkOk = styled(HiOutlineBookmarkAlt)`
  position: absolute;
  right: 15px;
  color: #ffffff;
  width: 22px;
  height: 22px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const WrapperBookmark = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    width: 22px;
    height: 22px;
    top: 330px;
    left: -280px;
  }
`;
