import { useMedia } from 'react-use';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { Header, LogoImg, NavLinks, NavigateList } from './AppBar.styled';
import { MobilAppBar } from './MobilAppBar/MobilAppBar';

import foundFilmsLogo from '../../assets/logo/foundfilms-logo.png';

export const AppBar = () => {
  const isWide = useMedia('(min-width: 768px)');
  const { t } = useTranslation();

  return (
    <Header>
      {!isWide ? (
        <MobilAppBar />
      ) : (
        <>
          <Link to="/">
            <LogoImg src={foundFilmsLogo} alt="Logo" />
          </Link>
          <NavigateList>
            <NavLinks to="/">{t('Home')}</NavLinks>
            <NavLinks to="/popular">{t('Popular')}</NavLinks>
            <NavLinks to="/search">{t('Search')}</NavLinks>
            <NavLinks to="/favorites">{t('Favorites')}</NavLinks>
          </NavigateList>
        </>
      )}
    </Header>
  );
};
