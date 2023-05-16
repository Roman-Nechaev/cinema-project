import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { selectMoviesDetails } from '../../redux/movieDetails/selector';
import { fetchDetailsMovie } from '../../redux/movieDetails/operations';
import checkPoster from '../../utils/checkPoster';
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
} from './MovieDetails.styled';
import { useToggle } from '../../hooks/useToggle';
import convertGenres from '../../utils/convertGenres';

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const moviesDetails = useSelector(selectMoviesDetails);
  const location = useLocation();
  const { moviesId } = useParams();
  const beckLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const { isOpen, toggle } = useToggle();

  useEffect(() => {
    if (!moviesId) return;
    dispatch(fetchDetailsMovie(moviesId));
  }, [dispatch, moviesId]);
  const { title, poster_path, overview, genres, backdrop_path } = moviesDetails;
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
              <WrapperBookmark onClick={toggle}>
                {isOpen ? <BookmarkOk /> : <Bookmark />}
              </WrapperBookmark>
              <Title>{title}</Title>

              {genres && (
                <Genres>
                  Genres: <span>{convertGenres(genres)}</span>
                </Genres>
              )}
              <Overview>{overview}</Overview>
            </WrapperInfo>
          </>
        </BgGradient>
      </WrapperBgImg>
    </WrapperCards>
  );
};
