import ListCards from '../listCards/listCards';
import { placeOptions } from '../../const';
import { CardProps } from '../../mocks/offers';

type MainProps = {
  offerCardsCount: number;
  offers: CardProps[];
}

function MainComponent({offerCardsCount, offers}: MainProps): JSX.Element {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offerCardsCount} places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width={7} height={4}>
                <use xlinkHref="#icon-arrow-select" />
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              {placeOptions.map((place) => (
                <li
                  key={place}
                  className="places__option places__option--active"
                  tabIndex={0}
                >
                  {place}
                </li>
              ))}
            </ul>
          </form>
          <ListCards offers={offers} />
          {/* <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <OfferCard
                key={offer.id}
                id={offer.id}
                isPremium={offer.isPremium}
                previewImage={offer.previewImage}
                price={offer.price}
                title={offer.title}
                isFavorite={offer.isFavorite}
                type={offer.type}
                rating={offer.rating}
              />
            ))}
          </div> */}
        </section>
        <div className="cities__right-section">
          <section className="cities__map map" />
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
