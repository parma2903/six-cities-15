import { NameSpace } from '../../const';
import { Offer, State } from '../../types/offers';

export const getOffer = (state: Pick<State, NameSpace.Offer>): Offer | null => state[NameSpace.Offer].offer;
export const getOfferIsLoading = (state: Pick<State, NameSpace.Offer>): boolean => state[NameSpace.Offer].offerIsLoading;
export const getOfferIsNotFound = (state: Pick<State, NameSpace.Offer>): boolean => state[NameSpace.Offer].offerIsNotFound;
