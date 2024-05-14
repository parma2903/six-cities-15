import { NameSpace } from '../../const';
import { makeFakeCity, makeFakeOffers } from '../../mocksTest';
import { getOffers, getOffersByCity, getOffersDataLoadingStatus, getIsOffersNotFound, getCity, getCityName, getSortType } from './selectors';

describe('Offers selectors', () => {
  const fakeOffers = makeFakeOffers();
  const fakeCity = makeFakeCity();

  const fakeState = {
    [NameSpace.Offers] : {
      allOffers: fakeOffers,
      offersByCity: fakeOffers.filter((offer) => offer.city.name === fakeCity.name),
      allCities: Array.from({ length: 6 }, makeFakeCity),
      citiesNames: [],
      cityName: fakeCity.name,
      city: fakeCity,
      sortType: 'POPULAR',
      isOffersLoading: false,
      isOffersNotFound: false,
    }
  };

  describe('getOffers', () => {
    it('returns offers from state', () => {
      const result = getOffers(fakeState);
      expect(result).toEqual(fakeOffers);
    });
  });

  describe('getOffersByCity', () => {
    it('returns only offers, that suit selected city', () => {
      const expectedResult = fakeOffers.filter((offer) => offer.city.name === fakeCity.name);
      const result = getOffersByCity(fakeState);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('getOffersDataLoadingStatus', () => {
    it('returns "true" if data is loading', () => {
      const expectedLoadingStatus = fakeState[NameSpace.Offers].isOffersLoading;
      const result = getOffersDataLoadingStatus(fakeState);

      expect(result).toEqual(expectedLoadingStatus);
    });
  });

  describe('getIsOffersNotFound', () => {
    it('returns true if Data is not Found', () => {
      const expectedResult = fakeState[NameSpace.Offers].isOffersNotFound;
      const result = getIsOffersNotFound(fakeState);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('getCity', () => {
    it('returns selected city', () => {
      const expectedResult = fakeState[NameSpace.Offers].city;
      const result = getCity(fakeState);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('getCityName', () => {
    it('returns the name os selected city', () => {
      const expectedResult = fakeState[NameSpace.Offers].cityName;
      const result = getCityName(fakeState);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('getSortType', () => {
    it('returns the type of sort', () => {
      const expectedResult = fakeState[NameSpace.Offers].sortType;
      const result = getSortType(fakeState);

      expect(result).toEqual(expectedResult);
    });
  });
});
