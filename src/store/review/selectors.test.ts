import { NameSpace } from '../../const';
import { makeFakeReviews } from '../../mocksTest';
import { getReviews, getReviewsStatus } from './selectors';
import { FetchStatus } from '../../const';

const fakeReviews = makeFakeReviews();
const fakeState = {
  [NameSpace.Reviews]: {
    reviews: fakeReviews,
    reviewStatus: FetchStatus.None,
  }
};

describe('Review selectors', () => {
  describe('getReviews', () => {
    it('returns reviews', () => {
      const result = getReviews(fakeState);

      expect(result).toEqual(fakeReviews);
    });
  });

  describe('getReviewsStatus', () => {
    it('returns review status', () => {
      const result = getReviewsStatus(fakeState);

      expect(result).toBe('none');
    });
  });
});
