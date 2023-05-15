import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import { selectMoviesDetails } from '../../redux/movieDetails/selector';
import { fetchDetailsMovie } from '../../redux/movieDetails/operations';
import checkPoster from '../../utils/checkPoster';

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const moviesDetails = useSelector(selectMoviesDetails);
  const location = useLocation();
  const { moviesId } = useParams();
  const beckLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!moviesId) return;
    dispatch(fetchDetailsMovie(moviesId));
  }, [dispatch, moviesId]);
  const { title, poster_path, overview, genres, vote_average, backdrop_path } =
    moviesDetails;
  return (
    <>
      <Link to={beckLinkLocationRef.current}>Go BACK</Link>
      <h1>Hello MovieDetails</h1>

      <>
        <img src={checkPoster(poster_path)} loading="lazy" alt={title} />
        <p>{title}</p>
      </>
    </>
  );
};
