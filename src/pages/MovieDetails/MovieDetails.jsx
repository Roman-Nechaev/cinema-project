import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState, Suspense } from 'react';
import { NavLink, useLocation, useParams, Outlet } from 'react-router-dom';

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
} from './MovieDetails.styled';
import {
  selectFilmsIdValue,
  setFilmsID,
} from '../../redux/savedFilmsId/savedFilmsIdSlice';
import { MdOutlineTheaterComedy } from 'react-icons/md';
import { useToggle } from '../../hooks/useToggle';

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const moviesDetails = useSelector(selectMoviesDetails);
  const savedFilmsId = useSelector(selectFilmsIdValue);

  const location = useLocation();
  const { moviesId } = useParams();
  const beckLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const [isFollowing, setIsFollowing] = useState(false);

  const { id, title, poster_path, overview, genres, backdrop_path } =
    moviesDetails;

  useEffect(() => {
    if (!moviesId) return;
    setIsFollowing(savedFilmsId.find(item => item.id === id));
    dispatch(fetchDetailsMovie(moviesId));
  }, [dispatch, id, moviesId, savedFilmsId]);

  const handleFollowClick = item => {
    dispatch(setFilmsID(item));
  };
  const { isOpen, open, close, toggle } = useToggle();
  console.log(isOpen);
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
              <SectionLink>
                <LinkNav to="cast" onClick={toggle}>
                  Cast
                </LinkNav>
                {/* <LinkNav to="reviews">Reviews</LinkNav> */}
              </SectionLink>
              <Title>{title}</Title>

              {genres && (
                <Genres>
                  Genres: <span>{convertGenres(genres)}</span>
                </Genres>
              )}
              <Overview>{overview}</Overview>
            </WrapperInfo>
          </>

          <WrapperOutlet flag={isOpen}>
            <Suspense fallback={'load...'}>
              <Outlet />
            </Suspense>
          </WrapperOutlet>
        </BgGradient>
      </WrapperBgImg>
    </WrapperCards>
  );
};
