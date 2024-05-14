import { NameSpace } from '../../const';
import { getOffer, getOfferIsLoading, getOfferIsNotFound } from './selectors';
import { makeFakeOffer } from '../../mocksTest';

const fakeOffer = makeFakeOffer();
const fakeState = {
  [NameSpace.Offer]: {
    offer: fakeOffer,
    offerIsLoading: false,
    offerIsNotFound: false,
  }
};

describe('Offer selectors', () => {
  describe('getOffer', () => {
    it('returns offer', () => {
      const result = getOffer(fakeState);
      expect(result).toEqual(fakeOffer);
    });
  });

  describe('getOfferIsLoading', () => {
    it('returns the correct status of loading', () => {
      const expectedResult = fakeState[NameSpace.Offer].offerIsLoading;
      const result = getOfferIsLoading(fakeState);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('getOfferIsNotFound', () => {
    it('returns correct status if offer not found', () => {
      const expectedResult = fakeState[NameSpace.Offer].offerIsNotFound;
      const result = getOfferIsNotFound(fakeState);

      expect(result).toEqual(expectedResult);
    });
  });
});
