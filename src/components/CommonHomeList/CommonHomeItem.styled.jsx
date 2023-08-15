import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemImg = styled.img`
  min-width: 94px;
  width: 94px;
  height: 141px;

  width: 100%;
  height: 230px;
`;

export const LinkSt = styled(Link)`
  display: flex;

  cursor: pointer;
  transition: 0.5s;

  flex-direction: column;

  width: 180px;

  :hover,
  :focus {
    transform: scale(1.03);
  }
`;

export const ListItem = styled.li`
  position: relative;
  margin: 10px;

  border-radius: 15px;

  transition: 0.5s;
`;

export const Title = styled.h2`
  font-size: 1em;
  color: #ffffff;

  text-align: center;
`;

export const Date = styled.span`
  font-size: 0.9em;
  color: #989898;
`;

export const Details = styled.div`
  padding: 10px;
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
