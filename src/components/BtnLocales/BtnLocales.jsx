import { useTranslation } from 'react-i18next';
import { Button, Container } from './BtnLocales.styled';

export const BtnLocales = () => {
  const { i18n } = useTranslation();

  const handleClickBtn = evt => {
    if (evt.target.nodeName !== 'BUTTON') {
      return;
    }

    const currentBtn = document.querySelector('.activeBtn');
    if (currentBtn) {
      currentBtn.classList.remove('activeBtn');
    }
    evt.target.classList.toggle('activeBtn');
  };

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <Container onClick={handleClickBtn}>
      <Button onClick={() => changeLanguage('en')}>EN</Button>
      <Button onClick={() => changeLanguage('uk')}>UK</Button>
      <Button onClick={() => changeLanguage('ru')}>RU</Button>
    </Container>
  );
};
