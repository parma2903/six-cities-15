import ListCards from '../listCards/listCards';
import Map from '../map/map';
import { Offers, City } from '../../types/offers';
import { useCallback, useState } from 'react';
import Sort from '../sort/sort';

type MainProps = {
  city: City;
  offers: Offers;
}

function MainComponent({city, offers}: MainProps): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleCardMouseEnter = useCallback((offerId: string) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);
    setActiveCardId(currentOffer ? currentOffer.id : null);
  }, []);

  const handleCardMouseLeave = useCallback(() => {
    setActiveCardId(null);
  }, []);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} place{offers.length > 1 && 's' || offers.length === 0 && 's'} to stay in {city.name}</b>
          <Sort />
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
