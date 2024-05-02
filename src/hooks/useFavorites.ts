import { useNavigate } from 'react-router-dom';
import { getAuthorizationStatus } from '../store/user/selectors';
import { useAppDispatch, useAppSelector } from './useApp';
import { AppRoute, AuthorizationStatus } from '../const';
import { setFavoriteAction } from '../store/api-actions';

export const useFavorites = (offerId: string, status: number) => {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  function handleFavoritesChange() {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }

    dispatch(setFavoriteAction({ offerId, status}));
  }

  return handleFavoritesChange;
};
