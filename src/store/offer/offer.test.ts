import { makeFakeOffer } from '../../mocksTest';
import { OfferData } from '../../types/offers';
import { fetchOfferAction } from '../api-actions';
import { offer, setFavoriteOffer } from './offer';

const fakeOffer = makeFakeOffer();
const initialState: OfferData = {
  offer: null,
  offerIsLoading: false,
  offerIsNotFound: false,
};

describe('Offer Slice', () => {
  it('returns initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offer: fakeOffer,
      offerIsLoading: false,
      offerIsNotFound: false,
    };
    const result = offer.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('returns initialState with undefined state and empty action', () => {
    const emptyAction = { type: '' };
    const result = offer.reducer(undefined, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('set favorite offer', () => {
    const fakeState: OfferData = {
      offer: fakeOffer,
      offerIsLoading: false,
      offerIsNotFound: false,
    };
    const action = setFavoriteOffer(true);
    const result = offer.reducer(fakeState, action);

    expect(result.offer?.isFavorite).toBe(true);
  });

  it('handle fetchOfferAction.pending', () => {
    const expectedState = {
      offer: null,
      offerIsLoading: true,
      offerIsNotFound: false,
    };
    const result = offer.reducer(initialState, fetchOfferAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should handle fetchOfferAction.fulfiled', () => {
    const expectedState = {
      offer: fakeOffer,
      offerIsLoading: false,
      offerIsNotFound: false,
    };
    const result = offer.reducer(expectedState, fetchOfferAction.fulfilled);

    expect(result).toEqual(expectedState);
  });

  it('should handle fetchOfferAction.rejected', () => {
    const expectedState = {
      offer: fakeOffer,
      offerIsLoading: false,
      offerIsNotFound: true,
    };
    const result = offer.reducer(expectedState, fetchOfferAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
