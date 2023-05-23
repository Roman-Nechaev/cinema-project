import { MoviesPopularList } from '../../components/MoviesPopularList/MoviesPopularList';
import { Container, Tittle } from './Home.styled';

export const Home = () => {
  return (
    <Container>
      <Tittle>Popular Movies</Tittle>
      <MoviesPopularList />
    </Container>
  );
};
