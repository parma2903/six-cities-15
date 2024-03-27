const CITIES: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

const placeOptions: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const SORT_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first']

const enum SortOption {
  Popular = 0,
  PriceLowToHigh = 1,
  PriceHighToLow = 2,
  TopRatedFirst = 3
}

export enum APIRoute {
  Comments ='/comments',
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout'
}

export { CITIES, placeOptions, AppRoute, AuthorizationStatus, SORT_OPTIONS, SortOption };
