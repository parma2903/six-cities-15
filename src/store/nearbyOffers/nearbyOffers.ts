import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { NearbyOffersData, Offer } from '../../types/offers';
import { fetchNearbyOffersAction } from '../apiActions';

const initialState: NearbyOffersData = {
  nearbyOffers: [],
  isNearbyOffersLoading: false,
  isNearbyOffersNotFound: false,
};

export const nearbyOffers = createSlice({
  name: NameSpace.NearbyOffers,
  initialState,
  reducers: {
    setFavoriteOffersNearby(state, action: PayloadAction<Offer>) {
      const nearbyFavorite = action.payload;

      state.nearbyOffers = state.nearbyOffers.map((item: Offer) =>
        item.id === nearbyFavorite.id ? nearbyFavorite : item
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isNearbyOffersLoading = true;
        state.isNearbyOffersNotFound = false;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        const offersNearbyData = action.payload;

        if (offersNearbyData !== undefined && offersNearbyData !== null) {
          state.nearbyOffers = offersNearbyData;
        }

        state.isNearbyOffersLoading = false;
        state.isNearbyOffersNotFound = false;
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.isNearbyOffersLoading = false;
        state.isNearbyOffersNotFound = true;
      });
  },
});

export const { setFavoriteOffersNearby } = nearbyOffers.actions;
