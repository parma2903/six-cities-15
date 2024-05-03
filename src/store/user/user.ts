import { createSlice } from '@reduxjs/toolkit';
import { checkAuthAction, fetchFavoritesOffersAction, loginAction, logoutAction } from '../api-actions';
import { AuthorizationStatus, NameSpace } from '../../const';
import { UserData, UserProcess } from '../../types/offers';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null
};

export const user = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    assignDefaultAuthStatus: (state) => {
      state.authorizationStatus = AuthorizationStatus.Unknown;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        const userData = action.payload;

        if (userData !== undefined && userData !== null) {
          state.user = userData;
        }
        state.authorizationStatus = AuthorizationStatus.Auth;
        fetchFavoritesOffersAction();
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        const userData = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;

        if (userData !== undefined && userData !== null) {
          state.user = userData as UserData;
        }
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});

export const { assignDefaultAuthStatus } = user.actions;
