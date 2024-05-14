import { NameSpace } from '../../const';
import { getNearbyOffers, getNearbyOffersIsLoading, getNearbyOffersIsNotFound } from './selectors';
import { makeFakeNearbyPlaces } from '../../mocksTest';

const fakeNearbyOffers = makeFakeNearbyPlaces();
const fakeState = {
  [NameSpace.NearbyOffers]: {
    nearbyOffers: fakeNearbyOffers,
    isNearbyOffersLoading: false,
    isNearbyOffersNotFound: false,
  }
};

describe('NearByOffers selectors', () => {
  describe('getNearbyOffers', () => {
    it('returns offers that is near', () => {
      const result = getNearbyOffers(fakeState);

      expect(result).toEqual(fakeNearbyOffers);
    });
  });

  describe('getNearbyOffersIsLoading', () => {
    it('returns offers that is near', () => {
      const expectedResult = fakeState[NameSpace.NearbyOffers].isNearbyOffersLoading;
      const result = getNearbyOffersIsLoading(fakeState);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('getNearbyOffersIsNotFound', () => {
    it('returns offers that is near', () => {
      const expectedResult = fakeState[NameSpace.NearbyOffers].isNearbyOffersNotFound;
      const result = getNearbyOffersIsNotFound(fakeState);

      expect(result).toEqual(expectedResult);
    });
  });
});
