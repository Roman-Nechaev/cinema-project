import { useEffect, useRef } from 'react';
import { useMedia } from 'react-use';
import { createPortal } from 'react-dom';
import { useLocation, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import YouTube from 'react-youtube';

import { fetchMovieVideos } from '../../redux/movieVideos/operations';
import { selectMoviesVideos } from '../../redux/movieVideos/selector';

import { BackDrop, CloseIcon, NoTrailer } from './TrailerMovieModal.styled';

const modalRoot = document.querySelector('#trailer-root');

export const TrailerMovie = () => {
  const isWide = useMedia('(min-width: 768px)');
  const dispatch = useDispatch();
  const { moviesId } = useParams();
  const location = useLocation();
  const key = useSelector(selectMoviesVideos);
  const { t } = useTranslation();

  useEffect(() => {
    const lang = t('language');

    dispatch(fetchMovieVideos({ movie_Id: moviesId, lang }));
  }, [dispatch, moviesId, t]);

  const backLinkLocationRef = useRef(
    location.state?.from ?? `/movies/${moviesId}`
  );

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
    <div className="modal-show">
      <Link to={backLinkLocationRef.current}>
        <BackDrop>
          <CloseIcon />
          {key ? (
            <YouTube videoId={key.key} opts={wide(isWide)} />
          ) : (
            <NoTrailer>There`s no trailer</NoTrailer>
          )}
        </BackDrop>
      </Link>
    </div>,

    modalRoot
  );
};
