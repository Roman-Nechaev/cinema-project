import styled from '@emotion/styled';

export const CastScrolled = styled.div`
  position: absolute;

  /* top: 150px; */
  left: 0;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;

  backdrop-filter: blur(25px);

  background: rgba(255, 255, 255, 0.25);

  width: 100%;

  bottom: -170px;

  animation: ani 1s forwards;

  transform: translateY(50%);

  @keyframes ani {
    0% {
      bottom: -10%;

      transform: translateY(50%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes hide {
    0% {
      transform: translateY(0);
    }
    100% {
      bottom: -10%;

      transform: translateY(50%);
    }
  }
`;

export const Ul = styled.ul`
  overflow-y: hidden;
  overflow-x: scroll;
  margin-left: -10px;
  margin-top: -10px;
  padding-bottom: 10px;
  & {
    list-style-type: none;
    list-style-position: inside;
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
    top: 0;
    left: 0;
  }
  & {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 10px;
    padding-inline-start: 10px;
  }
`;

export const LiCard = styled.li`
  /* margin-top: 10px; */
  margin-bottom: 15px;
  margin-left: 10px;
  margin-right: 4px;
  border: 1px solid rgba(227, 227, 227, 1);
  /* padding-bottom: 10px; */
  border-radius: 8px;
  overflow: hidden;
  min-width: 20%;

  @media screen and (min-width: 900px) {
    min-width: 140px;
  }
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Img = styled.img`
  min-width: 100%;
  /* height: 200px; */
`;

export const Name = styled.p`
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 0;
  color: #4e4e4e;
  text-align: center;
`;

export const Character = styled.p`
  padding-top: 5px;
  text-align: center;
  font-size: 0.9em;
  color: #4e4e4e;
  /* padding-left: 8px; */
`;
