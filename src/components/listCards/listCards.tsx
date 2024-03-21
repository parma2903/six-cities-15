import { AllProps } from '../../mocks/offers';
import OfferCard from '../card/card';

type ListCardsProps = {
  offers: AllProps[];
  activeCardId: string | null;
  onCardMouseEnter: (offerId: string) => void;
  onCardMouseLeave: () => void;
}

function ListCards({offers, activeCardId, onCardMouseEnter, onCardMouseLeave}: ListCardsProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
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
    </div>
  );
}

export default ListCards;
