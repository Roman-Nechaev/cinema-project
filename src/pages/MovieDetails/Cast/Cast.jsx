import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequestCast } from '../../../redux/requestCast/operations';
import { useLocation, useParams } from 'react-router-dom';
import { selectMoviesCast } from '../../../redux/requestCast/selector';
import { checkAvatarCast } from '../../../utils/checkAvatarCast';
import {
  CastScrolled,
  Character,
  Img,
  LiCard,
  Name,
  Ul,
  LinkClose,
  CloseIcon,
} from './Cast.styled';
import { useToggle } from '../../../hooks/useToggle';

export const Cast = () => {
  const dispatch = useDispatch();
  const moviesCast = useSelector(selectMoviesCast);

  const location = useLocation();
  const { moviesId } = useParams();

  const backLinkLocationRef = useRef(
    location.state?.from ?? `/movies/${moviesId}`
  );

  useEffect(() => {
    dispatch(fetchRequestCast(moviesId));
  }, [dispatch, moviesId]);

  const { isOpen, toggle } = useToggle();

  return (
    <CastScrolled flag={isOpen}>
      <LinkClose to={backLinkLocationRef.current} onClick={toggle}>
        <CloseIcon />
      </LinkClose>
      {moviesCast && (
        <Ul>
          {moviesCast.map(({ id, name, character, profile_path }) => (
            <LiCard key={id}>
              <Img
                loading="lazy"
                src={checkAvatarCast(profile_path)}
                alt={name}
              />
              <Name>{name}</Name>
              <Character>{character}</Character>
            </LiCard>
          ))}
        </Ul>
      )}
    </CastScrolled>
  );
};
