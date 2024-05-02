import { setCity, setCityName, setOffersByCity } from '../../store/offers/offers';
import { useAppDispatch, useAppSelector } from '../../hooks/useApp';
import { Link } from 'react-router-dom';
import { AppRoute, CITIES } from '../../const';
import { getCityName } from '../../store/offers/selectors';

function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const cityName = useAppSelector(getCityName);
  const citiesNames: string[] = CITIES.map((city) => city.name);

  const handleCityClick = (city: string) => {
    const selectedCity = CITIES.find((item) => item.name === city);

    if (selectedCity) {
      dispatch(setCityName(city));
      dispatch(setCity(selectedCity));
      dispatch(setOffersByCity());
    }
  };

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {citiesNames.map((city) => (
              <li className="locations__item" key={city}>
                <Link className={`locations__item-link tabs__item ${city === cityName ? 'tabs__item--active' : ''}`} to={AppRoute.Main} onClick={() => handleCityClick(city)}>
                  <span>{city}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default CitiesList;
