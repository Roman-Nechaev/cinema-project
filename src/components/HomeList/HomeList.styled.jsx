import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-top: 30px;
  overflow: hidden;
`;

export const WrapperArrow = styled.div`
  top: -205px;
  left: 40%;
  position: relative;
`;

export const WrapperList = styled.ul`
  display: flex;

  margin: 16px 0;
  overflow-x: scroll;
  height: 320px;

  margin-left: 50px;
`;

export const LinkMore = styled(Link)`
  color: #ffffff;

  transition: all 0.5s;
  justify-content: center;
  writing-mode: vertical-rl;
  vertical-align: bottom;
  text-align: center;
  font-size: 20px;

  :hover {
    color: #56e6d5;
  }
`;
