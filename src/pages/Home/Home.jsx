import { useEffect } from 'react';
import { fetchPopMovie } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovies } from '../../redux/selector';

export const Home = () => {
  const dispatch = useDispatch();
  const moviesPopular = useSelector(selectMovies);

  console.log(moviesPopular.length);

  useEffect(() => {
    dispatch(fetchPopMovie(1));
  }, [dispatch]);
  return (
    <>
      <h1>Home Page</h1>

      <ul>
        {moviesPopular.map(i => (
          <li key={i.id}>{i.original_title}</li>
        ))}
      </ul>
    </>
  );
};
