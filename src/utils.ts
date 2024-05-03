import { Offers, Cities, City, Reviews } from './types/offers';
import { SORTING_OPTIONS } from './const';

export function getCitiesFromOffers(offers: Offers): Cities {
  const citiesSet: Set<City> = new Set();
  offers.forEach((offer) => {
    citiesSet.add(offer.city);
  });

  return Array.from(citiesSet);
}

export function getCitiesNames(offers: Offers) {
  const cityNamesSet = new Set<string>();
  offers.forEach((offer) => {
    cityNamesSet.add(offer.city.name);
  });

  return cityNamesSet;
}

export function getOffersByCity(offers: Offers, city: City): Offers {
  return offers.filter((offer) => offer.city.name === city.name);
}

export function offersSorting(type: string, list: Offers) {
  switch (type) {
    case SORTING_OPTIONS.PRICE_LOW_TO_HIGH:
      return list.sort((a, b) => a.price - b.price);
    case SORTING_OPTIONS.PRICE_HIGH_TO_LOW:
      return list.sort((a, b) => b.price - a.price);
    case SORTING_OPTIONS.TOP_RATED_FIRST:
      return list.sort((a, b) => b.rating - a.rating);
    default:
      return list;
  }
}

export const getOfferId = (offerId: string, offers: Offers): string | null => {
  const foundOffer = offers.find((offer) => offer.id === offerId);
  return foundOffer ? foundOffer.id : null;
};

export const setRatingStars = (rating: number): string => `${(Math.round(rating) * 100 / 5)}%`;

export function sortReviewsByDate(reviews: Reviews): Reviews {
  return reviews.slice().sort((a,b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}

export function groupOffersByCity(offers: Offers): { [key: string]: Offers } {
  return offers.reduce((acc: { [key:string]: Offers }, offer) => {
    const cityName = offer.city.name;
    if (!acc[cityName]) {
      acc[cityName] = [];
    }
    acc[cityName].push(offer);
    return acc;
  }, {});
}

export function getCityByName(cityName: string, offers: Offers): City | undefined {
  const foundOffer = offers.find((offer) => offer.city.name === cityName);
  return foundOffer ? foundOffer.city : undefined;
}
