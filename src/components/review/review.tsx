import { ReviewProps } from '../../mocks/offers';

type ReviewMainProps = {
  review: ReviewProps;
}

function Review({review}: ReviewMainProps): JSX.Element {
  const { comment, user, rating, date} = review;
  const { name, avatarUrl } = user;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          { comment }
        </p>
        <time className="reviews__time" dateTime={new Date(date).toISOString()}>
          { new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) }
        </time>
      </div>
    </li>
  );
}

export default Review;
