import { createSlice } from '@reduxjs/toolkit';
import { ReviewsData } from '../../types/offers';
import { FetchStatus, NameSpace } from '../../const';
import { fetchReviewsAction, submitCommentAction } from '../apiActions';


const initialState: ReviewsData = {
  reviews: [],
  reviewStatus: FetchStatus.None
};

export const reviews = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.reviewStatus = FetchStatus.Loading;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        const reviewsData = action.payload;

        if (reviewsData !== undefined && reviewsData !== null) {
          state.reviews = reviewsData;
        }
        state.reviewStatus = FetchStatus.None;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.reviewStatus = FetchStatus.Rejected;
      })
      .addCase(submitCommentAction.pending, (state) => {
        state.reviewStatus = FetchStatus.Loading;
      })
      .addCase(submitCommentAction.fulfilled, (state, action) => {
        const newReview = action.payload;
        if (newReview !== undefined && newReview !== null) {
          state.reviews.push(newReview);
        }
        state.reviewStatus = FetchStatus.None;
      })
      .addCase(submitCommentAction.rejected, (state) => {
        state.reviewStatus = FetchStatus.Rejected;
      });
  },
});
