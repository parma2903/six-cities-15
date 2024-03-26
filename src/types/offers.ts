type LocationProps ={
  latitude: number;
  longitude: number;
  zoom: number;
};

type CityProps = {
  name: string;
  location: LocationProps;
};

type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city?: CityProps;
  location?: LocationProps;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type Offers = Offer[];
