const Setting = {
  OfferCardsCount: 312,
} as const;

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

export { Setting, CITIES, placeOptions, AppRoute, AuthorizationStatus };
