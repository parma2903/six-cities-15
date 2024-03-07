import Header from '../components/header/header';
import MainComponent from '../components/main/mainComponent';
import { CITIES } from '../const';
//import { CardProps } from '../mocks/offers';
import { AllProps } from '../mocks/offers';
import { Link } from 'react-router-dom';

type MainProps = {
  offerCardsCount: number;
  offers: AllProps[];
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
                  <Link className="locations__item-link tabs__item" to="#">
                    <span>{city}</span>
                  </Link>
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
