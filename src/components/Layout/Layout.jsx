// import { Home } from '../../pages/Home/Home';
import imageBg from '../../assets/imageBg/bg.jpeg';
import NetflixLogoMobil from '../../assets/logo/NetflixLogoMobil.png';
import { ImgBg, LogoImg } from './St.styled';

export const Layout = () => {
  return (
    <>
      <ImgBg src={imageBg} alt="" />
      <header>
        <LogoImg src={NetflixLogoMobil} alt="" />

        <p>logo</p>
      </header>
    </>
  );
};
