import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

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
} from './MovieDetails.styled';
import {
  selectFilmsIdValue,
  setFilmsID,
} from '../../redux/savedFilmsId/savedFilmsIdSlice';

export const MovieDetails = () => {
  const dispatch = useDispatch();
  const moviesDetails = useSelector(selectMoviesDetails);
  const savedFilmsId = useSelector(selectFilmsIdValue);
  console.log(savedFilmsId);
  const location = useLocation();
  const { moviesId } = useParams();
  const beckLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const [isFollowing, setIsFollowing] = useState(false);

  const { id, title, poster_path, overview, genres, backdrop_path } =
    moviesDetails;

  useEffect(() => {
    if (!moviesId) return;

    dispatch(fetchDetailsMovie(moviesId));

    const savedFollowingFilms = localStorage.getItem('followingFilms');
    if (savedFollowingFilms) {
      const parsedFollowingFilms = JSON.parse(savedFollowingFilms);
      setIsFollowing(parsedFollowingFilms.includes(id));
    }
  }, [dispatch, id, moviesId]);

  const handleFollowClick = id => {
    dispatch(setFilmsID(id));

    const newFollowState = !isFollowing;
    setIsFollowing(newFollowState);

    const savedFollowedFilms = localStorage.getItem('followingFilms');
    let updatedFollowedFilms = [];

    if (savedFollowedFilms) {
      updatedFollowedFilms = JSON.parse(savedFollowedFilms);
    }
    if (newFollowState) {
      updatedFollowedFilms.push(id);
    } else {
      updatedFollowedFilms = updatedFollowedFilms.filter(
        filmId => filmId !== id
      );
    }
    localStorage.setItem(
      'followingFilms',
      JSON.stringify(updatedFollowedFilms)
    );
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
              <WrapperBookmark onClick={() => handleFollowClick(id)}>
                {isFollowing ? <BookmarkOk /> : <Bookmark />}
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
