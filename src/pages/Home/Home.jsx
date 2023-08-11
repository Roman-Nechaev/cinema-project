import { useTranslation } from 'react-i18next';
import { HomeList } from '../../components/HomeList/HomeList';
import { Container, Tittle, Description } from './Home.styled';
export const Home = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Tittle>{t('HomeTitle')} Found Films</Tittle>
      <Description>Found Films {t('HomeDescription')}</Description>

      <HomeList />
    </Container>
  );
};
