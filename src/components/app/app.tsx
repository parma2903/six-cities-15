import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../pages/main';
import LoginScreen from '../../pages/login';
import FavoritesScreen from '../../pages/favorites';
import OfferScreen from '../../pages/offer';
import PrivateRoute from '../private-route/private-route';
import NotFoundScreen from '../../pages/not-found';
import { ReviewProps } from '../../mocks/offers';
import { useAppSelector } from '../../hooks/useApp';
import LoadingScreen from '../loadingScreen/loadingScreen';
import HistoryRouter from '../historyRoute/historyRoute';
import browserHistory from '../../browserHistory';

type AppScreenProps = {
  reviews: ReviewProps[];
}

function App({reviews}: AppScreenProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading: boolean = useAppSelector((state) => state.isOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus} >
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferScreen authorizationStatus={AuthorizationStatus.Auth} reviews={reviews}/>}
        />
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </HistoryRouter>

  );
}

export default App;
