import ListCards from '../listCards/listCards';
import Map from '../map/map';
import { placeOptions } from '../../const';
import { AllProps, CityProps } from '../../mocks/offers';
import { useState } from 'react';

type MainProps = {
  city: CityProps;
  offers: AllProps[];
}

function MainComponent({city, offers}: MainProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const handleCardMouseEnter = (offerId: string) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);
    setActiveCardId(currentOffer ? currentOffer.id : null);
  };

  const handleCardMouseLeave = () => {
    setActiveCardId(null);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {city.name}</b>
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
          <ListCards
            offers={offers}
            activeCardId={activeCardId}
            onCardMouseEnter={handleCardMouseEnter}
            onCardMouseLeave={handleCardMouseLeave}
          />
        </section>
        <div className="cities__right-section">
          <Map city={city} offers={offers} activeCardId={activeCardId}/>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
