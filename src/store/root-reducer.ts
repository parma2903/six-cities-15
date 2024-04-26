import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offers } from './offers/offers';
import { offer } from './offer/offer';
import { user } from './user/user';
import { errorMessage } from './error/error';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offers.reducer,
  [NameSpace.Offer]: offer.reducer,
  [NameSpace.User]: user.reducer,
  [NameSpace.ErrorMessage]: errorMessage.reducer,
});
