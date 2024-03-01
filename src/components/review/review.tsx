import ReviewList from '../reviewList/reviewList';
import ReviewForm from '../reviewForm/reviewForm';

type ReviewProps = {
  isAuth: boolean;
}
function Review({isAuth}: ReviewProps): JSX.Element {
  return (
    <>
      <ReviewList/>
      {isAuth && <ReviewForm />}

    </>
  );
}

export default Review;
