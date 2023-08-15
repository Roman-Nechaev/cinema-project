import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import YouTube from 'react-youtube';
import { useTranslation } from 'react-i18next';
import { useMedia } from 'react-use';

import { fetchMovieVideos } from '../../redux/movieVideos/operations';
import { selectMoviesVideos } from '../../redux/movieVideos/selector';

import { BackDrop, CloseIcon, NoTrailer } from './TrailerMovieModal.styled';

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
      <BackDrop onClick={handleBackdropClick} className="modal-show">
        <CloseIcon />
        {key ? (
          <YouTube videoId={key.key} opts={wide(isWide)} />
        ) : (
          <NoTrailer>There`s no trailer</NoTrailer>
        )}
      </BackDrop>
    </>,
    modalRoot
  );
};
