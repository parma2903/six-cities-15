import { Fragment, ReactEventHandler, useEffect, useState, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useApp';
import { FetchStatus, REVIEW_INITIAL_STATE, MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH } from '../../const';
import { getReviewsStatus } from '../../store/review/selectors';
import { submitCommentAction } from '../../store/apiActions';

type ChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>

const rating = [
  {value: 5, label: 'perfect'},
  {value: 4, label: 'perfect'},
  {value: 3, label: 'perfect'},
  {value: 2, label: 'perfect'},
  {value: 1, label: 'perfect'},
];

type ReviewFormProps = {
  offerId?: string;
}

function ReviewForm({ offerId }: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState(REVIEW_INITIAL_STATE);
  const reviewStatus = useAppSelector(getReviewsStatus);
  const isSubmitting = reviewStatus === FetchStatus.Loading;
  const isSubmitDisabled = formData.comment.length < MIN_COMMENT_LENGTH || formData.comment.length > MAX_COMMENT_LENGTH || formData.rating === REVIEW_INITIAL_STATE.rating || isSubmitting;

  useEffect(() => {
    if (reviewStatus === FetchStatus.None) {
      setFormData(REVIEW_INITIAL_STATE);
    }
  }, [reviewStatus]);

  const handleChange: ChangeHandler = (evt) => {
    const { name, value } = evt.currentTarget;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (offerId && !isSubmitDisabled) {
      dispatch(
        submitCommentAction({
          id: offerId,
          comment: formData.comment,
          rating: formData.rating,
        })
      );
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit ={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {rating.map(({value, label}) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleChange}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={label}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={''}
        onChange={handleChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay with at least{' '}
          <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
