import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../pages/main';
import LoginScreen from '../../pages/login';
import FavoritesScreen from '../../pages/favorites';
import OfferScreen from '../../pages/offer';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../../pages/not-found';

type AppScreenProps = {
  offerCardsCount: number;
}

function App({offerCardsCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen offerCardsCount={offerCardsCount}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} >
              <FavoritesScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferScreen/>}
        />
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
