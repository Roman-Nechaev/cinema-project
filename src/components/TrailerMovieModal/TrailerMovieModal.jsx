import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import YouTube from 'react-youtube';

import { useRef } from 'react';
import { useMedia } from 'react-use';

import { BackDrop, CloseIcon } from './TrailerMovieModal.styled';
import { useLocation, useParams, Link } from 'react-router-dom';
import { fetchMovieVideos } from '../../redux/movieVideos/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectMoviesVideos } from '../../redux/movieVideos/selector';

const modalRoot = document.querySelector('#trailer-root');

export const TrailerMovieModal = ({ onClose, onMoviesId }) => {
  const isWide = useMedia('(min-width: 768px)');
  const dispatch = useDispatch();
  const { moviesId } = useParams();
  const location = useLocation();
  const key = useSelector(selectMoviesVideos);

  const backLinkLocationRef = useRef(
    location.state?.from ?? `/movies/${moviesId}`
  );

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    dispatch(fetchMovieVideos(onMoviesId));
  }, [dispatch, onClose, onMoviesId]);

  const wide = e => {
    let opt = {
      height: '290',
      width: '360',
      playerVars: {
        autoplay: 1,
        origin: location.pathname,
      },
    };
    if (e) {
      opt = {
        playerVars: {
          autoplay: 1,
          origin: location.pathname,
          autohide: 1,
        },
      };
      return opt;
    }
    return opt;
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      return onClose();
    }
  };

  return createPortal(
    // <Link to={backLinkLocationRef.current}>
    <>
      <BackDrop onClick={handleBackdropClick}>
        <CloseIcon onClick={handleBackdropClick} />
        {key ? (
          <YouTube videoId={key.key} opts={wide(isWide)} />
        ) : (
          <h1>No Trailer</h1>
        )}
      </BackDrop>
    </>,
    // </Link>,
    modalRoot
  );
};

//
