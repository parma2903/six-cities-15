import { NameSpace } from '../../const';
import { Offers, State} from '../../types/offers';

export const getNearbyOffers = (state: State): Offers => state[NameSpace.NearbyOffers].nearbyOffers;
export const getNearbyOffersIsLoading = (state: State): boolean => state[NameSpace.NearbyOffers].isNearbyOffersLoading;
export const getNearbyOffersIsNotFound = (state: State): boolean => state[NameSpace.NearbyOffers].isNearbyOffersNotFound;
