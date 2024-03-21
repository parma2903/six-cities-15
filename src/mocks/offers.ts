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

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type ReviewProps = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

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
      'name': 'Amsterdam',
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
  },
  {
    'id': 'dbdbf3e5-ad62-4c06-aaca-2e903dff34ef',
    'title': 'The Joshua Tree House',
    'type': 'house',
    'price': 707,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.4
  },
  {
    'id': '86dea48b-1656-4964-933a-754da66450fc',
    'title': 'The Joshua Tree House',
    'type': 'apartment',
    'price': 103,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7
  },
  {
    'id': 'e46ca20c-29e5-4f3b-b096-56c33dec3e2b',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'room',
    'price': 266,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.9
  },
  {
    'id': '0d96fa67-30b6-4272-a8dc-1476ffd65d33',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'room',
    'price': 113,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.9
  },
  {
    'id': '5fe39bc3-c84d-4959-9261-4638cfd029d6',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 437,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
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
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.6
  },
  {
    'id': '8e5b4b8e-868e-47e4-8660-e3e45f145910',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'room',
    'price': 152,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87961000000001,
      'longitude': 2.353499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.8
  },
  {
    'id': '949c575a-fe74-407f-b871-1ae44d042a3a',
    'title': 'Canal View Prinsengracht',
    'type': 'hotel',
    'price': 169,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.364499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.5
  },
  {
    'id': '6a31562c-d4fd-4624-90e8-4219afdb6249',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'apartment',
    'price': 272,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.837610000000005,
      'longitude': 2.3454990000000002,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.1
  },
  {
    'id': 'bcbbb719-8ad2-403e-9213-03e7e20f7a4e',
    'title': 'Perfectly located Castro',
    'type': 'room',
    'price': 117,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.84761,
      'longitude': 2.356499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.6
  },
  {
    'id': 'f4abcb3e-839e-4c16-8dc9-bcbda8461427',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'room',
    'price': 160,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.862610000000004,
      'longitude': 2.369499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.6
  },
  {
    'id': '4cd1813e-26ca-465e-a8fc-470ff278541c',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'apartment',
    'price': 180,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.83861,
      'longitude': 2.350499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.1
  },
];

export const CITY: CityProps = {
  'name': 'Amsterdam',
  'location': {
    'latitude': 52.37454,
    'longitude': 4.897976,
    'zoom': 13
  }
};

export const CITIES: CityProps[] = [
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

export const Reviews: ReviewProps[] = [
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
