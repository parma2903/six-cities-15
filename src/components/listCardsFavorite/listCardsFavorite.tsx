import { useAppDispatch } from '../../hooks/useApp';
import { setCityName, setOffersByCity, setCity } from '../../store/offers/offers';
import { City, Offers } from '../../types/offers';
import OfferCard from '../card/card';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getCityByName } from '../../utils';

type ListCardsFavoriteProps = {
  city: string;
  offersByCity: Offers;
}

function ListCardsFavorite({ city, offersByCity}: ListCardsFavoriteProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = getCityByName(city, offersByCity);

  function handleCityButtonClick(chosenCity: City) {
    dispatch(setCityName(chosenCity.name));
    dispatch(setCity(chosenCity));
    dispatch(setOffersByCity());
  }
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          {currentCity && (
            <Link className="locations__item-link" to={AppRoute.Main} onClick={() => handleCityButtonClick(currentCity)}>
              <span>{currentCity.name}</span>
            </Link>
          )}
        </div>
      </div>
      <div className="favorites__places">
        {!!offersByCity.length &&
          offersByCity.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
            />
          ))}
      </div>
    </li>
  );
}

export default ListCardsFavorite;
