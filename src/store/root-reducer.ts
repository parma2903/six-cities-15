import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offers } from './offers/offers';
import { offer } from './offer/offer';
import { user } from './user/user';
import { reviews } from './review/review';
import { nearbyOffers } from './nearbyOffers/nearbyOffers';
import { errorMessage } from './error/error';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offers.reducer,
  [NameSpace.Offer]: offer.reducer,
  [NameSpace.User]: user.reducer,
  [NameSpace.Reviews]: reviews.reducer,
  [NameSpace.NearbyOffers]: nearbyOffers.reducer,
  [NameSpace.ErrorMessage]: errorMessage.reducer,
});
