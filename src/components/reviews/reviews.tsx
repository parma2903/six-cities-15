import ListReviews from '../listReviews/listReviews';
import ReviewForm from '../reviewForm/reviewForm';
import { ReviewProps } from '../../mocks/offers';

type ReviewsProps = {
  isAuth: boolean;
  reviews: ReviewProps[];
}
function Reviews({isAuth, reviews}: ReviewsProps): JSX.Element {
  return (
    <>
      <ListReviews reviews={reviews}/>
      {isAuth && <ReviewForm />}

    </>
  );
}

export default Reviews;
