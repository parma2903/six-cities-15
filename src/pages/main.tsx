import Header from '../components/header/header';
import CitiesList from '../components/citiesList/citiesList';
import MainComponent from '../components/main/mainComponent';
import MainEmptyComponent from '../components/main-empty/main-empty';
import { useAppSelector } from '../hooks/useApp';
import { getCity, getOffers } from '../store/offers/selectors';

function MainScreen(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const currentCity = useAppSelector(getCity);
  const currentOffers = offers.filter((offer) => offer.city?.name === currentCity.name);
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <CitiesList />
        {currentOffers.length === 0 ? <MainEmptyComponent city={currentCity}/> : <MainComponent />}
      </main>
    </div>
  );
}

export default MainScreen;
