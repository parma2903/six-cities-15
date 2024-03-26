import {createReducer} from '@reduxjs/toolkit';
import {setCity, setOffers, loadOffers, requireAuthorization} from './action';
import { AllOffers, CITY } from '../mocks/offers';
import { AuthorizationStatus } from '../const';

const initialState = {
  city: CITY,
  offers: AllOffers,
  AuthorizationStatus: AuthorizationStatus.Unknown,
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
      state.AuthorizationStatus = action.payload;
    });
});

export {reducer};
