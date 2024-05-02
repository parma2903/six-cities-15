import ListCards from '../listCards/listCards';
import Map from '../map/map';
import { useCallback, useState } from 'react';
import Sort from '../sort/sort';
import { useAppSelector } from '../../hooks/useApp';
import { getCity, getOffersByCity } from '../../store/offers/selectors';
import { getOfferId } from '../../utils';

function MainComponent(): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const offersByCity = useAppSelector(getOffersByCity);
  const city = useAppSelector(getCity);

  const handleCardHover = useCallback((offerId: string) => {
    setActiveCardId(getOfferId(offerId, offersByCity));
  }, []);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersByCity.length} place{offersByCity.length > 1 && 's' || offersByCity.length === 0 && 's'} to stay in {city.name}</b>
          <Sort />
          <ListCards
            offers={offersByCity}
            activeCardId={activeCardId}
            setCardHoverId={handleCardHover}
          />
        </section>
        <div className="cities__right-section">
          <Map className={'cities__map map'} city={city} offers={offersByCity} activeCardId={activeCardId}/>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
