import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequestCast } from '../../../redux/requestCast/operations';
import { Link, useLocation, useParams } from 'react-router-dom';
import { selectMoviesCast } from '../../../redux/requestCast/selector';
import { checkAvatarCast } from '../../../utils/checkAvatarCast';
import { CastScrolled, Character, Img, LiCard, Name, Ul } from './Cast.styled';

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

  return (
    <CastScrolled>
      <Link to={backLinkLocationRef.current}>X</Link>
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
