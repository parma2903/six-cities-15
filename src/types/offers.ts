import { AuthorizationStatus, NameSpace, FetchStatus } from '../const';
import { store } from '../store/index';

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  bedrooms: number;
  maxAdults: number;
  description: string;
  images: string[];
  host: User;
  goods: string[];
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

export type Comment = {
  id: string;
  comment: string;
  rating: number;
};

export type Review = Comment & {
  date: string;
  user: User;
};
export type Reviews = Review[];

export type FavoriteStatusData = {
  offerId: string;
  status: number;
};

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
  isNearbyOffersNotFound: boolean;
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
  [NameSpace.Reviews]: ReviewsData;
  [NameSpace.NearbyOffers]: NearbyOffersData;
  [NameSpace.FavoriteOffers]: FavoriteOffersData;
  [NameSpace.ErrorMessage]: ErrorData;
};

export type AppDispatch = typeof store.dispatch;

export type City = {
  name: string;
  location: Location;
};

export type Cities = City[];

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}
