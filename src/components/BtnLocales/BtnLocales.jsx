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
  const btn = document.querySelectorAll('#btn');

  for (const iterator of btn) {
    const foo = iterator.textContent.toLowerCase();
    if (foo === i18n.resolvedLanguage) {
      iterator.classList.add('activeBtn');
    }
  }
  return (
    <Container onClick={handleClickBtn}>
      <Button id="btn" onClick={() => changeLanguage('en')}>
        EN
      </Button>
      <Button id="btn" onClick={() => changeLanguage('uk')}>
        UK
      </Button>
    </Container>
  );
};
