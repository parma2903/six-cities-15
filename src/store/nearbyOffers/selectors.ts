import { NameSpace } from '../../const';
import { Offers, State} from '../../types/offers';

export const getNearbyOffers = (state: Pick<State, NameSpace.NearbyOffers>): Offers => state[NameSpace.NearbyOffers].nearbyOffers;
export const getNearbyOffersIsLoading = (state: Pick<State, NameSpace.NearbyOffers>): boolean => state[NameSpace.NearbyOffers].isNearbyOffersLoading;
export const getNearbyOffersIsNotFound = (state: Pick<State, NameSpace.NearbyOffers>): boolean => state[NameSpace.NearbyOffers].isNearbyOffersNotFound;
