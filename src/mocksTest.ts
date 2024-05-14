import {
  commerce,
  datatype,
  image,
  internet,
  date,
  lorem
} from 'faker';

import { Offer, Offers, Review, Reviews, User, UserData, AuthData, Comment, Location, City, State } from './types/offers';
import { address } from 'faker/locale/en';
import { AuthorizationStatus, DEFAUL_CITY, SORTING_OPTIONS, FetchStatus } from './const';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { createAPI } from './services/api';
import { Action } from '@reduxjs/toolkit';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const makeFakeUser = (): User => ({
  name: internet.userName(),
  isPro: datatype.boolean(),
  avatarUrl: internet.url(),
});

export const makeFakeUserData = (): UserData => ({
  name: internet.userName(),
  avatarUrl: datatype.string(),
  isPro: datatype.boolean(),
  email: datatype.string(),
  token: datatype.string(),
});

export const makeFakeAuthData = (): AuthData => ({
  login: internet.email(),
  password: datatype.string(),
});

export const makeFakeLocation = (): Location=> ({
  zoom: datatype.number({ min: 5, max: 15 }),
  latitude: datatype.number({ min: 5, max: 6, precision: 0.0001 }),
  longitude: datatype.number({ min: 4, max: 10, precision: 0.001 }),
});

export const makeFakeCity = (): City => ({
  name: address.cityName(),
  location: makeFakeLocation(),
});

export const makeFakeOffer = (): Offer => ({
  id: datatype.string(),
  title: lorem.word(10),
  type: commerce.product(),
  price: datatype.number(),
  rating: datatype.number({ min: 1, max: 5, precision: 0.1 }),
  bedrooms: datatype.number({ min: 1, max: 10 }),
  maxAdults: datatype.number({ min: 1, max: 5 }),
  isPremium: datatype.boolean(),
  isFavorite: datatype.boolean(),
  description: commerce.productDescription(),
  previewImage: image.imageUrl(260, 200, 'cat', true),
  images: Array.from({ length: 2 }, () => image.imageUrl(260, 200, 'cat', true)),
  location: makeFakeLocation(),
  city: makeFakeCity(),
  host: makeFakeUser(),
  goods: [commerce.product()],
});

export const makeFakeNearbyPlaces = (): Offers =>
  Array.from({ length: 3 }, makeFakeOffer);

export const makeFakeOffers = (): Offers =>
  Array.from({ length: 12 }, makeFakeOffer);

export const makeFakeReview = (): Review => ({
  id: datatype.string(),
  user: makeFakeUser(),
  rating: datatype.number({ min: 1, max: 5, precision: 0.1 }),
  comment: lorem.sentence(),
  date: String(date.recent()),
});

export const makeFakeReviews = (): Reviews =>
  Array.from({ length: 5 }, makeFakeReview);

export const makeFakeCommentData = (): Comment => ({
  id: datatype.string(),
  rating: datatype.number({ min: 1, max: 5, precision: 0.1 }),
  comment: lorem.sentence(),
});

export const extraActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  OFFERS: {
    allOffers: [],
    offersByCity: [],
    allCities: [],
    citiesNames: [],
    cityName: DEFAUL_CITY.name,
    city: DEFAUL_CITY,
    sortType: SORTING_OPTIONS.POPULAR,
    isOffersLoading: false,
    isOffersNotFound: false
  },
  OFFER: {
    offer: null,
    offerIsLoading: false,
    offerIsNotFound: false
  },
  USER: {
    authorizationStatus: AuthorizationStatus.Unknown,
    user: null
  },
  REVIEWS: {
    reviews: [],
    reviewStatus: FetchStatus.None
  },
  OFFERS_NEARBY: {
    nearbyOffers: [],
    isNearbyOffersLoading: false,
    isNearbyOffersNotFound: false,
  },
  ERROR_MESSAGE: {
    errorMessage: null
  },
  FAVORITE_OFFERS: {
    favoriteOffers: [],
    isFavoriteOffersLoading: false,
    isFavoriteOffersNotFound: false,
  },
  ...initialState ?? {},
});
