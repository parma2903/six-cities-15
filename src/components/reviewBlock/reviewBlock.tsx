import ListReviews from '../listReviews/listReviews';
import ReviewForm from '../reviewForm/reviewForm';
import { Reviews } from '../../types/offers';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/useApp';
import { getAuthorizationStatus } from '../../store/user/selectors';

type ReviewsProps = {
  reviews: Reviews;
  offerId?: string;
}
function ReviewBlock({reviews, offerId}: ReviewsProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    <>
      <ListReviews reviews={reviews}/>
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm offerId={offerId}/>}

    </>
  );
}

export default ReviewBlock;
