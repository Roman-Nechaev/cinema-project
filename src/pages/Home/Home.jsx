import { MoviesPopularList } from '../../components/MoviesPopularList/MoviesPopularList';

export const Home = () => {
  return (
    <>
      <h1 style={{ TextAlign: 'center', marginTop: '10px' }}>Popular Movies</h1>
      <MoviesPopularList />
    </>
  );
};
