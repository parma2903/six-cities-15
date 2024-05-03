import { NameSpace } from '../../const';
import { Offers, State } from '../../types/offers';

export const getFavoriteOffers = (state: State): Offers => state[NameSpace.FavoriteOffers].favoriteOffers;
export const getIsFavoritesLoading = (state: State): boolean => state[NameSpace.FavoriteOffers].isFavoriteOffersLoading;
export const getIsFavoritesNotFound = (state: State): boolean => state[NameSpace.FavoriteOffers].isFavoriteOffersNotFound;
export const getFavoritesLength = (state: State): number => state[NameSpace.FavoriteOffers].favoriteOffers.length;
