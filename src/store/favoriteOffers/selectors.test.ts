import { NameSpace } from '../../const';
import { makeFakeOffers } from '../../mocksTest';
import { getFavoriteOffers, getIsFavoritesLoading, getIsFavoritesNotFound, getFavoritesLength } from './selectors';

const fakeFavoriteOffers = makeFakeOffers();
const fakeState = {
  [NameSpace.FavoriteOffers]: {
    favoriteOffers: fakeFavoriteOffers,
    isFavoriteOffersLoading: false,
    isFavoriteOffersNotFound: false,
  }
};

describe('FavoriteOffers Selectors', () => {
  describe('getFavoriteOffers', () => {
    it('returns favourite offers', () => {
      const result = getFavoriteOffers(fakeState);

      expect(result).toEqual(fakeFavoriteOffers);
    });
  });

  describe('getIsFavoritesLoading', () => {
    it('returns offers that is near', () => {
      const expectedResult = fakeState[NameSpace.FavoriteOffers].isFavoriteOffersLoading;
      const result = getIsFavoritesLoading(fakeState);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('getIsFavoritesNotFound', () => {
    it('returns offers that is near', () => {
      const expectedResult = fakeState[NameSpace.FavoriteOffers].isFavoriteOffersNotFound;
      const result = getIsFavoritesNotFound(fakeState);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('getIsFavoritesNotFound', () => {
    it('returns offers that is near', () => {
      const result = getFavoritesLength(fakeState);

      expect(result).toBe(fakeFavoriteOffers.length);
    });
  });
});
