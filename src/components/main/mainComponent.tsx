import ListCards from '../listCards/listCards';
import Map from '../map/map';
import { AllProps, CityProps } from '../../mocks/offers';
import { useState } from 'react';
import Sort from '../sort/sort';
import { SortOption } from '../../const';

type MainProps = {
  city: CityProps;
  offers: AllProps[];
}

function MainComponent({city, offers}: MainProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [activeSort, setActiveSort] = useState(SortOption.Popular);

  const handleCardMouseEnter = (offerId: string) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);
    setActiveCardId(currentOffer ? currentOffer.id : null);
  };

  const handleCardMouseLeave = () => {
    setActiveCardId(null);
  };

  let sortedOffers = offers;

  if (activeSort === SortOption.PriceLowToHigh) {
    sortedOffers = offers.toSorted((a, b) => a.price - b.price);
  }

  if (activeSort === SortOption.PriceHighToLow) {
    sortedOffers = offers.toSorted((a, b) => b.price - a.price);
  }

  if (activeSort === SortOption.TopRatedFirst) {
    sortedOffers = offers.toSorted((a, b) => b.rating - a.rating);
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} place{offers.length > 1 && 's' || offers.length === 0 && 's'} to stay in {city.name}</b>
          <Sort current={activeSort} setter={setActiveSort} />
          <ListCards
            offers={sortedOffers}
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
