import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import { selectMoviesDetails } from '../../redux/movieDetails/selector';
import { fetchDetailsMovie } from '../../redux/movieDetails/operations';
import checkPoster from '../../utils/checkPoster';

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
} from './MovieDetails.styled';

import {
  selectFilmsIdValue,
  setFilmsID,
} from '../../redux/savedFilmsId/savedFilmsIdSlice';

import 'react-circular-progressbar/dist/styles.css';

import { useToggle } from '../../hooks/useToggle';
import { Transition } from 'react-transition-group';

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const moviesDetails = useSelector(selectMoviesDetails);
  const savedFilmsId = useSelector(selectFilmsIdValue);

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

    setIsFollowing(savedFilmsId.find(item => item.id === id));

    dispatch(fetchDetailsMovie(moviesId));
  }, [dispatch, id, moviesId, savedFilmsId]);

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
      <WrapperBgImg
        img={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
      >
        <BgGradient>
          <LinkBack to={beckLinkLocationRef.current}>Go BACK</LinkBack>
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
                  Genres: <span>{convertGenres(genres)}</span>
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
                  <LinkNav to="cast">Cast</LinkNav>
                  <LinkNav to="trailer">Trailer</LinkNav>
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
