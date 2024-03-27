import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Reviews } from './mocks/offers';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorMessage from './components/errorMessage/errorMessage';
import { fetchOfferAction, checkAuthAction } from './store/api-actions';

store.dispatch(fetchOfferAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App reviews={Reviews} />
    </Provider>
  </React.StrictMode>
);
