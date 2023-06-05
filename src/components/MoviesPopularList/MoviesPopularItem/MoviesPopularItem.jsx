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
  WrapperProgressbar,
} from '../MoviesPopularList.styled';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilmsIdValue,
  setFilmsID,
} from '../../../redux/savedFilmsId/savedFilmsIdSlice';
import { useLocation } from 'react-router-dom';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const MoviesPopularItem = moviesItem => {
  console.log(moviesItem);
  const { id, title, poster_path, overview, release_date, vote_average } =
    moviesItem;
  const voteAverage = Math.ceil(vote_average * 10);
  const savedFilmsId = useSelector(selectFilmsIdValue);
  const dispatch = useDispatch();
  const [isFollowing, setIsFollowing] = useState(false);
  const location = useLocation();
  const isWide = useMedia('(min-width: 768px)');

  useEffect(() => {
    setIsFollowing(savedFilmsId.find(item => item.id === id));
  }, [id, savedFilmsId]);

  const handleFollowClick = item => {
    dispatch(setFilmsID(item));
  };
  return (
    <>
      <ListItem>
        <WrapperProgressbar>
          <CircularProgressbar
            value={voteAverage}
            text={`${voteAverage}%`}
            styles={{
              root: {
                width: '45px',
                height: '45px',
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

                fontSize: '30px',
                fontWeight: 'bold',
              },
              background: {
                fill: '#3ec759',
              },
            }}
          />
          <WrapperBtnFollowing
            onClick={() => {
              handleFollowClick(moviesItem);
            }}
          >
            {isFollowing ? <BookmarkOk /> : <Bookmark />}
          </WrapperBtnFollowing>
        </WrapperProgressbar>

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
