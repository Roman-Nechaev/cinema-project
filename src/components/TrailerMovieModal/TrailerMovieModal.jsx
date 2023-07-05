import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import YouTube from 'react-youtube';

import { useMedia } from 'react-use';

import { BackDrop, CloseIcon } from './TrailerMovieModal.styled';
import { useLocation } from 'react-router-dom';
import { fetchMovieVideos } from '../../redux/movieVideos/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectMoviesVideos } from '../../redux/movieVideos/selector';
import { useTranslation } from 'react-i18next';

const modalRoot = document.querySelector('#trailer-root');

export const TrailerMovieModal = ({ onClose, onMoviesId }) => {
  const isWide = useMedia('(min-width: 768px)');
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const location = useLocation();
  const key = useSelector(selectMoviesVideos);

  useEffect(() => {
    const lang = t('language');
    dispatch(fetchMovieVideos({ movie_Id: onMoviesId, lang }));
  }, [dispatch, onMoviesId, t]);

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
    onClose();
  };

  return createPortal(
    <>
      <BackDrop onClick={handleBackdropClick}>
        <CloseIcon />
        {key ? (
          <YouTube videoId={key.key} opts={wide(isWide)} />
        ) : (
          <h1>No Trailer</h1>
        )}
      </BackDrop>
    </>,
    modalRoot
  );
};
