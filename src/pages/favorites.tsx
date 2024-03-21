import { useState } from 'react';
import Header from '../components/header/header';
import ListCardsFavorite from '../components/listCardsFavorite/listCardsFavorite';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/useApp';

function FavoritesScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  function handleCardMouseEnter(offerId: string) {
    setActiveCardId(offerId);
  }

  function handleCardMouseLeave() {
    setActiveCardId(null);
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ListCardsFavorite
              offers={favoriteOffers}
              activeCardId={activeCardId}
              onCardMouseEnter={handleCardMouseEnter}
              onCardMouseLeave={handleCardMouseLeave}
            />
          </section>
        </div>
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
