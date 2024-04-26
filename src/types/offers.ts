import { AuthorizationStatus, NameSpace, FetchStatus } from '../const';
import { store } from '../store/index';

type LocationProps ={
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location: LocationProps;
};

export type Cities = City[];

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location?: LocationProps;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type Offers = Offer[];

export type CardProps = Omit<Offer, 'city'| 'location'>;

export type AuthData = {
  login: string;
  password: string;
};

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type UserAuth = {
  email: string;
  token: string;
};

export type UserData = User & UserAuth;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
};

export type OffersData = {
  allOffers: Offers;
  offersByCity: Offers;
  allCities: Cities;
  citiesNames: string[];
  cityName: string;
  city: City;
  sortType: string;
  isOffersLoading: boolean;
  isOffersNotFound: boolean;
};

export type OfferData = {
  offer: Offer | null;
  offerIsLoading: boolean;
  offerIsNotFound: boolean;
};

export type ReviewsData = {
  reviews: Reviews;
  reviewStatus: FetchStatus;
};

export type NearbyOffersData = {
  nearbyOffers: Offers;
  isNearbyOffersLoading: boolean;
  IsNearbyOffersNotFound: boolean;
};

export type FavoriteOffersData = {
  favoriteOffers: Offers;
  isFavoriteOffersLoading: boolean;
  isFavoriteOffersNotFound: boolean;
};

export type ErrorData = {
  errorMessage: string | null;
};

export type State = {
  [NameSpace.Offers]: OffersData;
  [NameSpace.Offer]: OfferData;
  [NameSpace.User]: UserProcess;
  // [NameSpace.Reviews]: ReviewsData;
  // [NameSpace.NearbyOffers]: NearbyOffersData;
  // [NameSpace.FavoriteOffers]: FavoriteOffersData;
   [NameSpace.ErrorMessage]: ErrorData;
};

export type AppDispatch = typeof store.dispatch;

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

export type Reviews = Review[];

export const CITY: City = {
  'name': 'Amsterdam',
  'location': {
    'latitude': 52.37454,
    'longitude': 4.897976,
    'zoom': 13
  }
};

export const CITIES: Cities = [
  {
    name: 'Paris',
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 10
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 10
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8503,
      longitude: 4.3517,
      zoom: 10
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.373100,
      longitude: 4.893300,
      zoom: 10
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 10
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
      zoom: 10
    }
  }
];

export const Reviews: Reviews = [
  {
    'id': 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    'date': '2019-05-08T14:13:56.569Z',
    'user': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'rating': 4
  },
  {
    'id': 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62b',
    'date': '2019-05-08T14:13:56.569Z',
    'user': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'rating': 4
  },
  {
    'id': 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62c',
    'date': '2019-05-08T14:13:56.569Z',
    'user': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'rating': 4
  },
];
