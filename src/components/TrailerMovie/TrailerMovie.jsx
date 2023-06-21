import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import YouTube from 'react-youtube';
const modalRoot = document.querySelector('#trailer-root');

import { BackDrop, CloseIcon } from './TrailerMovie.styled';
import { useLocation, useParams, Link } from 'react-router-dom';
import { fetchMovieVideos } from '../../redux/movieVideos/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectMoviesVideos } from '../../redux/movieVideos/selector';
import { useRef } from 'react';
import { useMedia } from 'react-use';

export const TrailerMovie = () => {
  const isWide = useMedia('(min-width: 768px)');
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

  const wide = e => {
    let opt = {
      height: '290',
      width: '360',
      playerVars: {
        autoplay: 1,
      },
    };
    if (e) {
      opt = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
        },
      };
      return opt;
    }
    return opt;
  };

  return createPortal(
    <Link to={backLinkLocationRef.current}>
      <BackDrop>
        <CloseIcon />
        {key ? (
          <YouTube videoId={key.key} opts={wide(isWide)} />
        ) : (
          <h1>Нет трейлера</h1>
        )}
      </BackDrop>
    </Link>,

    modalRoot
  );
};
