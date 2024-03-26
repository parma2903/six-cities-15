import { createAction } from '@reduxjs/toolkit';
import { CityProps, AllProps } from '../mocks/offers';
import { Offers } from '../types/offers';

export const setCity = createAction('SET_CITY', (city: CityProps) => ({ payload: city, }));
export const setOffers = createAction('SET_OFFERS', (offers: AllProps[]) => ({ payload: offers, }));
export const loadOffers = createAction<Offers>('data/loadQuestions');
