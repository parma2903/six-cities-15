import { City, Offers } from '../types/offers' ;

export const getOfferById = (offerId: string, offers: Offers) => offers.find((offer) => offer.id === offerId);
export const getOffersByCity = (city: City, offers: Offers) => offers.filter((offer) => offer.city?.name === city.name);
export const getFavoriteOffers = (offers: Offers) => offers.filter((offer) => offer.isFavorite);
