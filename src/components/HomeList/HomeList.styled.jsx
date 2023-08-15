import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-top: 30px;
  overflow: hidden;
`;

export const WrapperList = styled.ul`
  display: flex;

  margin: 16px 0;
  overflow-x: scroll;

  margin-left: 50px;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  :after {
    content: '›';
    position: absolute;
    width: 10px;

    font-size: 36px;

    right: 0;
    opacity: ${props => (props.props >= 3150 ? '0' : '1')};
    margin-right: 15px;

    margin-top: 95px;
    color: #d8d8d8;
    transition-property: background-color;
    transition-duration: 3s;
  }
  ::before {
    content: '‹';
    position: absolute;

    font-size: 36px;

    left: 65px;
    opacity: ${props => (props.props >= 50 ? '1' : '0')};
    margin-top: 95px;
    color: #d8d8d8;
  }
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
