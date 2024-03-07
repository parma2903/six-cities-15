import { Link } from 'react-router-dom';
//import { CardProps } from '../../mocks/offers';
import { AllProps } from '../../mocks/offers';

type CardFavoriteProps = AllProps & {
  isActive?: boolean;
  onCardMouseEnter: () => void;
  onCardMouseLeave: () => void;
}

function CardFavorite({isPremium, previewImage, price, title, type, rating, isFavorite, isActive, onCardMouseEnter, onCardMouseLeave }: CardFavoriteProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#">
            <span>Amsterdam</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <article
          className={`favorites__card place-card ${isActive ? 'place-card--active' : ''}`}
          onMouseEnter={onCardMouseEnter}
          onMouseLeave={onCardMouseLeave}
        >
          {isPremium ? (
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
          ) : null}
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <Link to="#">
              <img
                className="place-card__image"
                src={previewImage}
                width={150}
                height={110}
                alt="Place image"
              />
            </Link>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{price}</b>
                <span className="place-card__price-text">
                  /&nbsp;night
                </span>
              </div>
              <button
                className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
                type="button"
              >
                <svg
                  className="place-card__bookmark-icon"
                  width={18}
                  height={19}
                >
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{ width: `${rating * 20}%` }} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <Link to="#">{title}</Link>
            </h2>
            <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
          </div>
        </article>
      </div>
    </li>
  );
}

export default CardFavorite;
