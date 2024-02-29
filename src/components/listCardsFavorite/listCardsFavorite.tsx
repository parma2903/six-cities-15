import { CardProps } from '../../mocks/offers';
import CardFavorite from '../cardFavorite/cardFavorite';

type ListCardsFavoriteProps = {
  offers: CardProps[];
  activeCardId: string | null;
  onCardMouseEnter: (offerId: string) => void;
  onCardMouseLeave: () => void;
}

function ListCardsFavorite({offers, activeCardId, onCardMouseEnter, onCardMouseLeave}: ListCardsFavoriteProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  return (
    <ul className="favorites__list">
      {favoriteOffers.map((offer) => (
        <CardFavorite
          key={offer.id}
          id={offer.id}
          isPremium={offer.isPremium}
          previewImage={offer.previewImage}
          price={offer.price}
          title={offer.title}
          isFavorite={offer.isFavorite}
          type={offer.type}
          rating={offer.rating}
          isActive={offer.id === activeCardId}
          onCardMouseEnter={() => onCardMouseEnter(offer.id)}
          onCardMouseLeave={onCardMouseLeave}
        />
      ))}
    </ul>
  );
}

export default ListCardsFavorite;
