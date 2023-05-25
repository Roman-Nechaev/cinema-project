import { MoviesPopularList } from '../../components/MoviesPopularList/MoviesPopularList';
import { TitlePage } from './PopularMoviesPages.styled';
export const PopularMoviesPages = () => {
  return (
    <>
      <TitlePage>PopularMovies</TitlePage>
      <MoviesPopularList />
    </>
  );
};
