import { NameSpace } from '../../const';
import { Offers, State } from '../../types/offers';

export const getFavoriteOffers = (state: Pick<State, NameSpace.FavoriteOffers>): Offers => state[NameSpace.FavoriteOffers].favoriteOffers;
export const getIsFavoritesLoading = (state: Pick<State, NameSpace.FavoriteOffers>): boolean => state[NameSpace.FavoriteOffers].isFavoriteOffersLoading;
export const getIsFavoritesNotFound = (state: Pick<State, NameSpace.FavoriteOffers>): boolean => state[NameSpace.FavoriteOffers].isFavoriteOffersNotFound;
export const getFavoritesLength = (state: Pick<State, NameSpace.FavoriteOffers>): number => state[NameSpace.FavoriteOffers].favoriteOffers.length;
