import { NameSpace } from '../../const';
import { State } from '../../types/offers';
import { City, Offers } from '../../types/offers';

export const getOffers = (state: Pick<State, NameSpace.Offers>): Offers => state[NameSpace.Offers].allOffers;
export const getOffersByCity = (state: Pick<State, NameSpace.Offers>): Offers => state[NameSpace.Offers].offersByCity;
export const getOffersDataLoadingStatus = (state: Pick<State, NameSpace.Offers>): boolean => state[NameSpace.Offers].isOffersLoading;
export const getIsOffersNotFound = (state: Pick<State, NameSpace.Offers>): boolean => state[NameSpace.Offers].isOffersNotFound;
export const getCity = (state: Pick<State, NameSpace.Offers>): City => state[NameSpace.Offers].city;
export const getCityName = (state: Pick<State, NameSpace.Offers>): string => state[NameSpace.Offers].cityName;
export const getSortType = (state: Pick<State, NameSpace.Offers>): string => state[NameSpace.Offers].sortType;
