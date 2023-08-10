import styled from 'styled-components';

export const WrapperPagination = styled.div`
  display: table;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
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
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-left: 60px;
  }
`;
