import checkPoster from '../../../utils/checkPoster';
import formattingOverview from '../../../utils/formattingOverview';
import { useMedia } from 'react-use';
import {
  ListItem,
  Bookmark,
  BookmarkOk,
  Date,
  Details,
  ItemImg,
  LinkSt,
  Overview,
  Title,
  WrapperBtnFollowing,
} from '../MoviesPopularList.styled';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilmsIdValue,
  setFilmsID,
} from '../../../redux/savedFilmsId/savedFilmsIdSlice';
import { useLocation } from 'react-router-dom';

export const MoviesPopularItem = moviesItem => {
  const { id, title, poster_path, overview, release_date } = moviesItem;
  const savedFilmsId = useSelector(selectFilmsIdValue);
  const dispatch = useDispatch();
  const [isFollowing, setIsFollowing] = useState(false);
  const location = useLocation();
  const isWide = useMedia('(min-width: 768px)');

  useEffect(() => {
    setIsFollowing(savedFilmsId.includes(id));
  }, [id, savedFilmsId]);

  const handleFollowClick = id => {
    dispatch(setFilmsID(id));
  };
  return (
    <>
      <ListItem>
        <WrapperBtnFollowing
          onClick={() => {
            handleFollowClick(id);
          }}
        >
          {isFollowing ? <BookmarkOk /> : <Bookmark />}
        </WrapperBtnFollowing>
        <LinkSt to={`/movies/${id}`} state={{ from: location }}>
          <ItemImg loading="lazy" src={checkPoster(poster_path)} alt={title} />
          <Details>
            <div>
              <Title>{title}</Title>
              <Date>{release_date}</Date>
            </div>
            {!isWide && <Overview>{formattingOverview(overview)}</Overview>}
          </Details>
        </LinkSt>
      </ListItem>
    </>
  );
};
