import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Setting} from './const';
import { AllOffers, Reviews } from './mocks/offers';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offerCardsCount = {Setting.OfferCardsCount}
        offers={AllOffers}
        reviews={Reviews}
      />
    </Provider>
  </React.StrictMode>
);
