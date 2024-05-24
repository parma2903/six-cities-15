import { makeFakeCity, makeFakeOffer, makeFakeOffers } from '../../mocksTest';
import { offers, setAllCities, setCitiesNames, setCity, setCityName, setFavoriteOffers, setSortType } from './offers';
import { DEFAUL_CITY, SORTING_OPTIONS } from '../../const';
import { OffersData, City } from '../../types/offers';
import { setOffersByCity } from './offers';
import { getOffersByCity, getCitiesNames, getCitiesFromOffers } from '../../utils';
import { fetchOffersAction } from '../api-actions';

const initialState: OffersData = {
  allOffers: [],
  offersByCity: [],
  allCities: [],
  citiesNames: [],
  cityName: DEFAUL_CITY.name,
  city: DEFAUL_CITY,
  sortType: SORTING_OPTIONS.POPULAR,
  isOffersLoading: false,
  isOffersNotFound: false,
};

describe('Offers Slice', () => {
  const fakeOffers = makeFakeOffers();
  const fakeCity = makeFakeCity();
  const fakeOffer = makeFakeOffer();

  it('should return initial state with action', () => {
    const emptyAction = { type: ''};
    const expectedState = {
      allOffers: fakeOffers,
      offersByCity: fakeOffers.filter((offer) => offer.city.name === fakeCity.name),
      allCities: Array.from({ length: 6 }, makeFakeCity),
      citiesNames: [],
      cityName: fakeCity.name,
      city: fakeCity,
      sortType: 'Popular',
      isOffersLoading: false,
      isOffersNotFound: false,
    };

    const result = offers.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: ''};
    const result = offers.reducer(undefined, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should handle setOffersByCity', () => {
    const stateWithOffers = {
      ...initialState,
      allOffers: fakeOffers,
    };
    const result = offers.reducer(stateWithOffers, setOffersByCity());

    expect(result.offersByCity).toEqual(getOffersByCity(stateWithOffers.allOffers, stateWithOffers.city));
  });

  it('should handle setCitiesNames', () => {
    const stateWithOffers = { ...initialState, allOffers: fakeOffers };
    const result = offers.reducer(stateWithOffers, setCitiesNames());

    expect(result.citiesNames).toEqual(Array.from(getCitiesNames(stateWithOffers.allOffers)));
  });

  it('should handle setAllCities', () => {
    const stateWithOffers = { ...initialState, allOffers: fakeOffers };
    const result = offers.reducer(stateWithOffers, setAllCities());

    expect(result.allCities).toEqual(getCitiesFromOffers(stateWithOffers.allOffers));
  });

  it('should handle setCityName', () => {
    const result = offers.reducer(initialState, setCityName('New York'));

    expect(result.cityName).toBe('New York');
  });

  it('should handle setCity', () => {
    const newCity: City = { name: 'New City', location: { latitude: 0, longitude: 0, zoom: 1 } };
    const result = offers.reducer(initialState, setCity(newCity));

    expect(result.city).toEqual(newCity);
  });

  it('should handle setFavoriteOffers', () => {
    const stateWithOffers = { ...initialState, offersByCity: [fakeOffer]};
    const updatedOffer = { ...fakeOffer, isFavorite: false };
    const result = offers.reducer(stateWithOffers, setFavoriteOffers(updatedOffer));

    expect(result.offersByCity[0].isFavorite).toBe(false);
  });

  it('should handle setSortType', () => {
    const result = offers.reducer(initialState, setSortType(SORTING_OPTIONS.PRICE_HIGH_TO_LOW));

    expect(result.sortType).toBe(SORTING_OPTIONS.PRICE_HIGH_TO_LOW);
  });

  it('should handle fetchOffersAction.pending', () => {
    const action = { type: fetchOffersAction.pending.type };
    const result = offers.reducer(initialState, action);

    expect(result.isOffersLoading).toBe(true);
  });

  it('should handle fetchOffersAction.fulfiled', () => {
    const action = { type: fetchOffersAction.fulfilled.type, payload: fakeOffers };
    const result = offers.reducer(initialState, action);

    expect(result.isOffersLoading).toBe(false);
    expect(result.allOffers).toEqual(fakeOffers);
  });

  it('should handle fetchOffersAction.rejected', () => {
    const action = { type: fetchOffersAction.rejected.type };
    const result = offers.reducer(initialState, action);

    expect(result.isOffersLoading).toBe(false);
    expect(result.isOffersNotFound).toBe(true);
  });
});
