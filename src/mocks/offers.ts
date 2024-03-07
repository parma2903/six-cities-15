type LocationProps ={
  latitude: number;
  longitude: number;
  zoom: number;
};

export type CityProps = {
  name: string;
  location: LocationProps;
};

export type AllProps = {
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

export type CardProps = Omit<AllProps, 'city'| 'location'>;

export const AllOffers: AllProps[] = [
  {
    'id': '02cc217d-30c0-41b3-8af9-7273953f8c23',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'room',
    'price': 101,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 1.6
  },
  {
    'id': 'b130506e-927f-4531-aedb-940ae5d979a1',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'apartment',
    'price': 460,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.3609553943508,
      'longitude': 4.85309666406198,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.9
  },
  {
    'id': 'd46049d1-e273-4a23-9e80-297c339ddd8f',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'house',
    'price': 255,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.929309666406198,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.1
  },
  {
    'id': 'e4e6eae4-e6f7-4de6-bc0f-94b729b9fd53',
    'title': 'Loft Studio in the Central Area',
    'type': 'room',
    'price': 210,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.3809553943508,
      'longitude': 4.939309666406198,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.3
  },
  {
    'id': '69ebf2da-0aac-483a-9683-a068f55b81f1',
    'title': 'Wood and stone place',
    'type': 'hotel',
    'price': 151,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87561,
      'longitude': 2.375499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 5
  }
];

export const CardOffers: CardProps[] = [
  {
    'id': '02cc217d-30c0-41b3-8af9-7273953f8c23',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'room',
    'price': 101,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    'isFavorite': true,
    'isPremium': false,
    'rating': 1.6,
  },
  {
    'id': 'b130506e-927f-4531-aedb-940ae5d979a1',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'apartment',
    'price': 460,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.9,
  },
  {
    'id': 'd46049d1-e273-4a23-9e80-297c339ddd8f',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'house',
    'price': 255,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.1,
  },
  {
    'id': 'e4e6eae4-e6f7-4de6-bc0f-94b729b9fd53',
    'title': 'Loft Studio in the Central Area',
    'type': 'room',
    'price': 210,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.3,
  },
  {
    'id': '69ebf2da-0aac-483a-9683-a068f55b81f1',
    'title': 'Wood and stone place',
    'type': 'hotel',
    'price': 151,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'isFavorite': true,
    'isPremium': true,
    'rating': 5,
  }
];


export const CITY: CityProps = {
  'name': 'Amsterdam',
  'location': {
    'latitude': 52.37454,
    'longitude': 4.897976,
    'zoom': 13
  }
};
