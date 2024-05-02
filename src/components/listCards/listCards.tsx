import { Offers } from '../../types/offers';
import OfferCard from '../card/card';

type ListCardsProps = {
  offers: Offers;
  activeCardId: string | null;
  setCardHoverId(id: string | null): void;
}

function ListCards({offers, activeCardId, setCardHoverId}: ListCardsProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer = {offer}
          isActive={offer.id === activeCardId}
          setCardHoverId ={setCardHoverId}
        />
      ))}
    </div>
  );
}

export default ListCards;
