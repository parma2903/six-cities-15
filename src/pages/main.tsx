import Header from '../components/header/header';
import MainComponent from '../components/main/mainComponent';
import { CITIES } from '../const';
import { CardProps } from '../mocks/offers';

type MainProps = {
  offerCardsCount: number;
  offers: CardProps[];
}

function MainScreen({offerCardsCount, offers}: MainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <Header />
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) => (
                <li className="locations__item" key={city}>
                  <a className="locations__item-link tabs__item" href="#">
                    <span>{city}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <MainComponent offerCardsCount={offerCardsCount} offers={offers} />
      </main>
    </div>
  );
}

export default MainScreen;
