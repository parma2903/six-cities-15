import { AppRoute } from '../../const';
import { Offer } from '../../types/offers';
import { Link, useLocation } from 'react-router-dom';
import { useFavorites } from '../../hooks/useFavorites';

type OfferCardProps = {
  offer: Offer;
  isActive?: boolean;
  setCardHoverId?(id: string | null): void;
}

function OfferCard({offer, isActive, setCardHoverId }: OfferCardProps): JSX.Element {
  const { id, title, type, price, isFavorite, isPremium, rating, previewImage } = offer;
  const favoriteStatus = isFavorite ? 0 : 1;
  const location = useLocation();
  const isOfferPage = location.pathname.includes('offer');
  const handleBookmarkClick = useFavorites(id, favoriteStatus);

  const handleCardMouseEnter = () => {
    if (setCardHoverId) {
      setCardHoverId(id);
    }
  };

  const handleCardMouseLeave = () => {
    if (setCardHoverId) {
      setCardHoverId(null);
    }
  };

  return (
    <article
      className={`${isOfferPage ? 'near-places__card' : 'cities__card'} place-card ${isActive ? 'place-card--active' : ''}`}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
            onClick={handleBookmarkClick}
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
}

export default OfferCard;
