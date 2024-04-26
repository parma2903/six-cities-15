import { City, Cities } from './types/offers';

export const DEFAUL_CITY: City = {
  'name': 'Amsterdam',
  'location': {
    'latitude': 52.37454,
    'longitude': 4.897976,
    'zoom': 13
  }
};

export const CITIES: Cities = [
  { name: 'Paris', location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 } },
  { name: 'Cologne', location: { latitude: 50.938361, longitude: 6.959974, zoom: 13 } },
  { name: 'Brussels', location: { latitude: 50.846557, longitude: 4.351697, zoom: 13 } },
  { name: 'Amsterdam', location: { latitude: 52.37454, longitude: 4.897976, zoom: 13 } },
  { name: 'Hamburg', location: { latitude: 53.550341, longitude: 10.000654, zoom: 13 } },
  { name: 'Dusseldorf', location: { latitude: 51.225402, longitude: 6.776314, zoom: 13 } }
];

export const SORTING_OPTIONS = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first'
};

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export enum APIRoute {
  Comments = '/comments',
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
  Favorite = '/favorite'
}

export const enum NameSpace {
  User = 'USER',
  Data = 'DATA',
  Offers = 'OFFERS',
  Offer = 'OFFER',
  Reviews = 'REVIEWS',
  NearbyOffers = 'OFFERS_NEARBY',
  FavoriteOffers = 'FAVORITE_OFFERS',
  ErrorMessage = 'ERROR_MESSAGE'
}

export const enum FetchStatus {
  Loading = 'loading',
  Rejected = 'rejected',
  None = 'none',
}

export const TIMEOUT_SHOW_ERROR = 2000;
export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;

