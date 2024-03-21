import { CityProps } from '../../mocks/offers';
import { setCity } from '../../store/action';
import { useAppDispatch } from '../../hooks/useApp';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type CitiesListProps = { cities: CityProps[]};

function CitiesList({cities}: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => (
              <li className="locations__item" key={city.name}>
                <Link className="locations__item-link tabs__item" to={AppRoute.Main} onClick={() => dispatch(setCity(city))}>
                  <span>{city.name}</span>
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
