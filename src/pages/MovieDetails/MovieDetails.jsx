import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useTranslation } from 'react-i18next';

import { selectMoviesDetails } from '../../redux/movieDetails/selector';

import { fetchDetailsMovie } from '../../redux/movieDetails/operations';
import checkPoster from '../../utils/checkPoster';
import { RiArrowGoBackFill } from 'react-icons/ri';

import convertGenres from '../../utils/convertGenres';

import {
  BgGradient,
  Bookmark,
  BookmarkOk,
  Genres,
  Img,
  ImgWrapper,
  LinkBack,
  Overview,
  Title,
  WrapperBgImg,
  WrapperBookmark,
  WrapperCards,
  WrapperInfo,
  SectionLink,
  WrapperOutlet,
  LinkNav,
  ContainerVote,
  PlayIcon,
  CastIcon,
} from './MovieDetails.styled';

import {
  selectFilmsIdValue,
  setFilmsID,
} from '../../redux/savedFilmsId/savedFilmsIdSlice';

import 'react-circular-progressbar/dist/styles.css';

import { useToggle } from '../../hooks/useToggle';
import { Transition } from 'react-transition-group';
import scrollToTop from '../../utils/scrollToTop';
import checkBackdropImage from '../../utils/checkBackdropImage';

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const moviesDetails = useSelector(selectMoviesDetails);

  const savedFilmsId = useSelector(selectFilmsIdValue);
  const { t } = useTranslation();
  const location = useLocation();
  const { moviesId } = useParams();
  const beckLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const [isFollowing, setIsFollowing] = useState(false);

  const {
    id,
    title,
    poster_path,
    overview,
    genres,
    backdrop_path,
    vote_average,
  } = moviesDetails;

  const voteAverage = Math.ceil(vote_average * 10);

  useEffect(() => {
    if (!moviesId) return;

    scrollToTop();

    setIsFollowing(savedFilmsId.find(item => item.id === id));
    const lang = t('language');
    dispatch(fetchDetailsMovie({ moviesId, lang }));
  }, [dispatch, id, moviesId, savedFilmsId, t]);

  const handleFollowClick = item => {
    dispatch(setFilmsID(item));
  };
  const { isOpen, toggle } = useToggle();

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <WrapperCards>
      <WrapperBgImg img={checkBackdropImage(poster_path, backdrop_path)}>
        <BgGradient>
          <LinkBack to={beckLinkLocationRef.current}>
            <RiArrowGoBackFill />
          </LinkBack>
          <>
            <ImgWrapper>
              <Img src={checkPoster(poster_path)} loading="lazy" alt={title} />
            </ImgWrapper>
            <WrapperInfo>
              <WrapperBookmark onClick={() => handleFollowClick(moviesDetails)}>
                {isFollowing ? <BookmarkOk /> : <Bookmark />}
              </WrapperBookmark>

              <Title>{title}</Title>
              {genres && (
                <Genres>
                  {t('Genres')}: <span>{convertGenres(genres)}</span>
                </Genres>
              )}

              <ContainerVote>
                <CircularProgressbar
                  value={voteAverage}
                  text={`${voteAverage}%`}
                  styles={{
                    root: {
                      width: '60px',
                      height: '60px',
                      // fontFamily: 'cursive',
                      backgroundColor: '#09344b',
                      borderRadius: '50%',
                      padding: '3px',
                    },
                    path: {
                      stroke: `rgba(17, 218, 164, ${voteAverage / 100})`,
                    },
                    trail: {
                      stroke: '#5b5a5a',
                    },
                    text: {
                      fill: '#ffffff',
                      dominantBaseline: 'central',

                      fontSize: '28px',
                    },
                    background: {
                      fill: '#3ec759',
                    },
                  }}
                />
                <SectionLink onClick={toggle}>
                  <LinkNav to="trailer">{<PlayIcon></PlayIcon>}</LinkNav>

                  <LinkNav to="cast">{<CastIcon></CastIcon>}</LinkNav>

                  {/* <LinkNav to="reviews">
                    Reviews
                  </LinkNav> */}
                </SectionLink>
              </ContainerVote>
              <Overview>{overview}</Overview>
            </WrapperInfo>

            <Transition in={isOpen} timeout={duration}>
              {state => (
                <div
                  style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                  }}
                >
                  <WrapperOutlet flag={isOpen}>
                    <Suspense fallback={'load...'}>
                      <Outlet />
                    </Suspense>
                  </WrapperOutlet>
                </div>
              )}
            </Transition>
          </>
        </BgGradient>
      </WrapperBgImg>
    </WrapperCards>
  );
};
