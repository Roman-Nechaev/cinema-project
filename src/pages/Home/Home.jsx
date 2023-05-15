import { MoviesPopularList } from '../../components/MoviesPopularList/MoviesPopularList';
import { Tittle } from './Home.styled';

export const Home = () => {
  return (
    <>
      <Tittle>Popular Movies</Tittle>
      <MoviesPopularList />
    </>
  );
};
