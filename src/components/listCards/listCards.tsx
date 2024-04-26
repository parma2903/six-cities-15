import { Offers } from '../../types/offers';
import OfferCard from '../card/card';

type ListCardsProps = {
  offers: Offers;
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
          offer = {offer}
          isActive={offer.id === activeCardId}
          onCardMouseEnter={() => onCardMouseEnter(offer.id)}
          onCardMouseLeave={onCardMouseLeave}
        />
      ))}
    </div>
  );
}

export default ListCards;
