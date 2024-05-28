import { useEffect } from 'react';
import Header from '../components/header/header';
import ListCardsFavorite from '../components/listCardsFavorite/listCardsFavorite';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useApp';
import { groupOffersByCity } from '../utils';
import { getFavoriteOffers, getFavoritesLength, getIsFavoritesLoading } from '../store/favoriteOffers/selectors';
import { fetchFavoritesOffersAction } from '../store/apiActions';
import LoadingScreen from '../components/loadingScreen/loadingScreen';
import FavoritesEmptyScreen from '../components/favorites-empty/favorites-empty';

function FavoritesScreen(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isFavoritesLoading = useAppSelector(getIsFavoritesLoading);
  const favoritesLength = useAppSelector(getFavoritesLength);
  const dispatch = useAppDispatch();
  const offersByCity = groupOffersByCity(favoriteOffers);

  useEffect(() => {
    dispatch(fetchFavoritesOffersAction());
  }, [dispatch]);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        {isFavoritesLoading && <LoadingScreen/>}
        {!favoritesLength ? (
          <FavoritesEmptyScreen />
        ) : (
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(offersByCity).map(([cityName, offers]) => (
                  <ListCardsFavorite
                    key={cityName}
                    city={cityName}
                    offersByCity={offers}
                  />
                ))}
              </ul>
            </section>
          </div>
        )}
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
