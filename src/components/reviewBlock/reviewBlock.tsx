import ListReviews from '../listReviews/listReviews';
import ReviewForm from '../reviewForm/reviewForm';
import { Reviews } from '../../types/offers';

type ReviewsProps = {
  isAuth: boolean;
  reviews: Reviews;
}
function ReviewBlock({isAuth, reviews}: ReviewsProps): JSX.Element {
  return (
    <>
      <ListReviews reviews={reviews}/>
      {isAuth && <ReviewForm />}

    </>
  );
}

export default ReviewBlock;
