import { useState } from 'react';
import Header from '../components/header/header';
import ListCardsFavorite from '../components/listCardsFavorite/listCardsFavorite';
//import { CardProps } from '../mocks/offers';
import { AllProps } from '../mocks/offers';
import { Link } from 'react-router-dom';

type FavouriteProps = {
  offers: AllProps[];
}

function FavoritesScreen({offers}: FavouriteProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  function handleCardMouseEnter(offerId: string) {
    setActiveCardId(offerId);
  }

  function handleCardMouseLeave() {
    setActiveCardId(null);
  }

  return (
    <div className="page">
      <header className="header">
        <Header />
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ListCardsFavorite
              offers={offers}
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
