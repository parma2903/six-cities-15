import { Reviews } from '../../types/offers';
import ReviewItem from '../reviewItem/reviewItem';
import { sortReviewsByDate } from '../../utils';

type ReviewListProps = {
  reviews: Reviews;
}

function ListReviews({reviews}: ReviewListProps): JSX.Element {
  const sortedReviews = sortReviewsByDate(reviews);
  return (
    <ul className="reviews__list">
      {sortedReviews.map((review) => (
        <ReviewItem
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
}

export default ListReviews;
