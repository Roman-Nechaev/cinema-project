import { MoviesPopularList } from '../../components/MoviesPopularList/MoviesPopularList';
import { Container, TitlePage } from './PopularMoviesPages.styled';
export const PopularMoviesPages = () => {
  return (
    <Container>
      <TitlePage>PopularMovies</TitlePage>
      <MoviesPopularList />
    </Container>
  );
};
