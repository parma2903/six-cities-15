import { Reviews } from '../../types/offers';
import ReviewItem from '../reviewItem/reviewItem';

type ReviewListProps = {
  reviews: Reviews;
}

function ListReviews({reviews}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
}

export default ListReviews;
