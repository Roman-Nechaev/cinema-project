import { WrapperMenu, MenuClose } from './MobilMenu.styles';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
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
