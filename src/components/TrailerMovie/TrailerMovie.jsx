import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import YouTube from 'react-youtube';
const modalRoot = document.querySelector('#trailer-root');

import { BackDrop } from './TrailerMovie.styled';
import { useLocation, useParams, Link } from 'react-router-dom';
import { fetchMovieVideos } from '../../redux/movieVideos/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectMoviesVideos } from '../../redux/movieVideos/selector';
import { useRef } from 'react';

export const TrailerMovie = () => {
  const dispatch = useDispatch();
  const { moviesId } = useParams();
  const location = useLocation();
  const key = useSelector(selectMoviesVideos);

  const backLinkLocationRef = useRef(
    location.state?.from ?? `/movies/${moviesId}`
  );

  useEffect(() => {
    dispatch(fetchMovieVideos(moviesId));
  }, [dispatch, moviesId]);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return createPortal(
    <Link to={backLinkLocationRef.current}>
      <BackDrop>
        {key ? (
          <YouTube videoId={key.key} opts={opts} />
        ) : (
          <h1>Нет трейлера</h1>
        )}
      </BackDrop>
    </Link>,

    modalRoot
  );
};
