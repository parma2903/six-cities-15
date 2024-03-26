import {createReducer} from '@reduxjs/toolkit';
import {setCity, setOffers, loadOffers, requireAuthorization} from './action';
import { CITY } from '../mocks/offers';
import { AuthorizationStatus } from '../const';
import { CityProps, Offers } from '../types/offers';

type InitialState = {
  city: CityProps;
  offers: Offers;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialState = {
  city: CITY,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
