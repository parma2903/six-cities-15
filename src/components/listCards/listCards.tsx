import { CardProps } from '../../mocks/offers';
import OfferCard from '../card/card';

type ListCardsProps = {
  offers: CardProps[];
}

function ListCards({offers}: ListCardsProps): JSX.Element {

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
        />
      ))}
    </div>
  );
}

export default ListCards;
