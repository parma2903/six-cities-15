import OfferCard from '../card/card';
import { placeOptions } from '../../const';
import { CardOffers } from '../../mock';

type MainProps = {
  offerCardsCount: number;
}

function MainComponent({offerCardsCount}: MainProps): JSX.Element {
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
          <div className="cities__places-list places__list tabs__content">
            {CardOffers.map((cardOffer) => (
              <OfferCard
                key={cardOffer.id}
                id={cardOffer.id}
                isPremium={cardOffer.isPremium}
                previewImage={cardOffer.previewImage}
                price={cardOffer.price}
                title={cardOffer.title}
                isFavorite={cardOffer.isFavorite}
                type={cardOffer.type}
                rating={cardOffer.rating}
              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map" />
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
