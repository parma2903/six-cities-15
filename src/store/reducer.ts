import {createReducer} from '@reduxjs/toolkit';
import {setCity, setOffers} from './action';
import { AllOffers, CITY } from '../mocks/offers';

const initialState = {
  city: CITY,
  offers: AllOffers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
