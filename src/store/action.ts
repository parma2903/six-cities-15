import { createAction } from '@reduxjs/toolkit';
import { CityProps, AllProps } from '../mocks/offers';
import { Offers } from '../types/offers';
import { AppRoute, AuthorizationStatus } from '../const';

export const setCity = createAction('SET_CITY', (city: CityProps) => ({ payload: city, }));
export const setOffers = createAction('SET_OFFERS', (offers: AllProps[]) => ({ payload: offers, }));
export const loadOffers = createAction<Offers>('data/loadQuestions');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('SET_ERROR');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
