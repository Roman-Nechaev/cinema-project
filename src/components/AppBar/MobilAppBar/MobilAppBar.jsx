import { useToggle } from '../../../hooks/useToggle';
import { MobilMenu } from '../../MobilMenu/MobilMenu';

import ffLogo from '../../../assets/logo/ff.png';

import { BurgerMenu, LogoImg, SearchIcon } from './MobilAppBar.styled';

export const MobilAppBar = () => {
  const { isOpen, open, close } = useToggle();
  return (
    <>
      {isOpen && <MobilMenu onClose={close} />}
      <BurgerMenu onClick={open} />
      <div>
        <LogoImg src={ffLogo} alt="" />
      </div>
      <div>
        {/* <UserIcon /> */}
        <SearchIcon />
      </div>
    </>
  );
};
