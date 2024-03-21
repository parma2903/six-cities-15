import { CityProps, AllProps } from '../mocks/offers' ;

export const getOfferById = (offerId: string, offers: AllProps[]) => offers.find((offer) => offer.id === offerId);
export const getOffersByCity = (city: CityProps, offers: AllProps[]) => offers.filter((offer) => offer.city?.name === city.name);
export const getFavoriteOffers = (offers: AllProps[]) => offers.filter((offer) => offer.isFavorite);
