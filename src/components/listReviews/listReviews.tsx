import { ReviewProps } from '../../mocks/offers';
import Review from '../review/review';

type ReviewListProps = {
  reviews: ReviewProps[];
}

function ListReviews({reviews}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {/* <Review reviews={reviews} /> */}
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
}

export default ListReviews;
