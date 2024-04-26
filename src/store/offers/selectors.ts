import { NameSpace } from '../../const';
import { State } from '../../types/offers';
import { City, Offers } from '../../types/offers';

export const getOffers = (state: State): Offers => state[NameSpace.Offers].allOffers;
export const getOffersByCity = (state: State): Offers => state[NameSpace.Offers].offersByCity;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersLoading;
export const getIsOffersNotFound = (state: State): boolean => state[NameSpace.Offers].isOffersNotFound;
export const getCity = (state: State): City => state[NameSpace.Offers].city;
export const getCityName = (state: State): string => state[NameSpace.Offers].cityName;
export const getSortType = (state: State): string => state[NameSpace.Offers].sortType;
