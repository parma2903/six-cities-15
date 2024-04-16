import Header from '../components/header/header';
import CitiesList from '../components/citiesList/citiesList';
import MainComponent from '../components/main/mainComponent';
import MainEmptyComponent from '../components/main-empty/main-empty';
import { CITIES } from '../mocks/offers';
import { useAppSelector } from '../hooks/useApp';

function MainScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);
  const currentOffers = offers.filter((offer) => offer.city?.name === currentCity.name);
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <CitiesList cities={CITIES}/>
        {currentOffers.length === 0 ? <MainEmptyComponent city={currentCity}/> : <MainComponent offers={currentOffers} city={currentCity} />}

      </main>
    </div>
  );
}

export default MainScreen;
