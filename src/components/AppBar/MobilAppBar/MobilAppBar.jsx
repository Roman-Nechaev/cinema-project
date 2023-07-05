import { useToggle } from '../../../hooks/useToggle';
import { MobilMenu } from '../../MobilMenu/MobilMenu';
import { Link } from 'react-router-dom';

import ffLogo from '../../../assets/logo/ff.png';

import { BurgerMenu, LogoImg, SearchIcon } from './MobilAppBar.styled';

export const MobilAppBar = () => {
  const { isOpen, open, close } = useToggle();
  return (
    <>
      {isOpen && <MobilMenu onClose={close} />}
      <BurgerMenu onClick={open} />
      <div>
        <Link to="/">
          <LogoImg src={ffLogo} alt="logo" />
        </Link>
      </div>
      <div>
        <Link to="/search">
          <SearchIcon />
        </Link>
      </div>
    </>
  );
};
