import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { WrapperMenu, MenuClose } from './MobilMenu.styles';

export const MobilMenu = ({ onClose }) => (
  <WrapperMenu>
    <h3>Hello mobil Menu</h3>
    <MenuClose onClick={onClose} />
    <ul onClick={onClose}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/search">Search</NavLink>
      </li>
      <li>
        <NavLink to="/popular">Popular</NavLink>
      </li>
      <li>
        <NavLink to="/favorites">Favorites</NavLink>
      </li>
    </ul>
  </WrapperMenu>
);

MobilMenu.propTypes = {
  onClose: PropTypes.func,
};
