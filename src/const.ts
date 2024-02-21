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

export { Setting, CITIES, placeOptions };
