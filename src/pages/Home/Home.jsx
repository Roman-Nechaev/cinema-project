import { HomeList } from '../../components/HomeList/HomeList';
import { Container, Tittle, Description } from './Home.styled';
export const Home = () => {
  return (
    <Container>
      <Tittle>Only on Found Films</Tittle>
      <Description>
        Found Films gives you amazing shows you won`t find anywhere else.
        Movies, series, specials and more - all tailored to your interests.
      </Description>

      <HomeList />
    </Container>
  );
};
