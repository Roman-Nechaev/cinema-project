import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {
  MdOutlineBookmarkBorder,
  MdOutlineBookmark,
  MdSlowMotionVideo,
} from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';

export const WrapperCards = styled.div`
  overflow: hidden;
  position: relative;
  top: 0;
  display: flex;
  min-height: 500px;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    min-height: 100vh;
    box-sizing: border-box;
  }
`;

export const WrapperBgImg = styled.div`
  display: flex;
  min-width: 100%;
  position: relative;
  min-height: 100vh;

  z-index: 99;

  background-color: #0a192f;

  border-bottom: 1px solid rgb(67, 67, 67);
  background-size: cover;

  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url(${props.img})`};

  @media screen and (min-width: 768px) {
    min-height: 100vh;
    z-index: 1;
    background-position: left calc((50vw - 170px) - 440px) top;
  }
`;

export const BgGradient = styled.div`
  overflow: hidden;
  @media screen and (min-width: 768px) {
    min-width: 100%;
    min-height: 100%;

    background-image: linear-gradient(
      to right,
      rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px),
      rgba(31.5, 31.5, 31.5, 0.84) 50%,
      rgba(31.5, 31.5, 31.5, 0.84) 100%
    );
  }
`;

export const ImgWrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 20%;
    left: 60px;
    min-width: 300px;
    width: 300px;
    height: 450px;
  }
`;

export const Img = styled.img`
  min-width: 100%;
  width: 100%;
  height: 100%;
  outline: none;
  display: block;
  border-radius: 15px;
`;

export const WrapperInfo = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 10px;
  padding-top: 30px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(2px);
  border-radius: 20px 20px 0 0;

  @media screen and (min-width: 768px) {
    background: rgba(255, 255, 255, 0);
    position: relative;
    border-radius: 20px;
    width: 400px;
    min-height: 350px;
    left: 380px;
    top: 224px;
  }
  @media screen and (min-width: 900px) {
    width: 550px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  padding-left: 10px;
  text-shadow: 1px 0 1px #000, 0 1px 1px #000, -1px 0 1px #000, 0 -1px 1px #000;
  @media screen and (min-width: 768px) {
    padding-left: 0px;
  }
`;

export const Genres = styled.p`
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
    bottom: 0;
  }
`;

export const LinkBack = styled(Link)`
  position: absolute;
  padding: 15px;
  top: 90px;
  left: 40px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(2px);
  border-radius: 50%;
  transition: all 0.3s;
  cursor: pointer;
  svg {
    width: 35px;
    height: 35px;
    color: #ffffff;
    transition: all 0.3s;
  }
  :hover {
    transform: scale(1.2);

    svg {
      color: #00ffc3;
    }
  }
`;

export const WrapperBookmark = styled.div`
  position: absolute;

  right: 0;
  margin-right: 20px;
  z-index: 99999;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 0;
    margin-right: 50px;
  }
`;

export const Bookmark = styled(MdOutlineBookmarkBorder)`
  color: #ffffff;
  width: 30px;
  height: 30px;
  transition: all 0.3s;

  :hover {
    transform: scale(1.3);
  }
`;

export const BookmarkOk = styled(MdOutlineBookmark)`
  color: #ffffff;
  width: 30px;
  height: 30px;
  transition: all 0.3s;

  :hover {
    transform: scale(1.3);
  }
`;

export const WrapperOutlet = styled.div`
  margin-top: 330px;
`;

export const SectionLink = styled.div`
  display: flex;

  align-items: center;
`;

export const LinkNav = styled(NavLink)`
  display: flex;

  margin-left: 6px;
  border-radius: 50%;

  background-color: #09344b;

  transition: all 0.3s;
  cursor: pointer;

  :hover {
    svg {
      color: #3cd95b;
    }

    transform: scale(1.1);
  }
  &.active {
    svg {
      color: #3cd95b;
    }
  }
`;

export const ContainerVote = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 15px;
  position: absolute;
  top: -40px;

  right: 0;
  padding-right: 30px;

  @media screen and (min-width: 768px) {
    position: relative;
    top: 90%;
  }
`;

export const PlayIcon = styled(MdSlowMotionVideo)`
  border: 2px solid rgb(212, 212, 212);
  color: #cfd0d0;
  transition: 0.5s;
  border-radius: 50%;

  width: 50px;
  height: 50px;
`;

export const CastIcon = styled(IoIosPeople)`
  color: #cfd0d0;
  border: 2px solid rgb(212, 212, 212);

  transition: 0.5s;
  border-radius: 50%;

  width: 45px;
  height: 45px;
`;
