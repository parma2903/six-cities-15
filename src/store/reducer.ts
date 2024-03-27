import {createReducer} from '@reduxjs/toolkit';
import {setCity, setOffers, loadOffers, requireAuthorization, setError} from './action';
import { CITY } from '../mocks/offers';
import { AuthorizationStatus } from '../const';
import { CityProps, Offers } from '../types/offers';

type InitialState = {
  city: CityProps;
  offers: Offers;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
}

const initialState: InitialState = {
  city: CITY,
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
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
    })
    .addCase(setError, (state, action) =>{
      state.error = action.payload;
    });
});

export {reducer};
