import { Fragment, ReactEventHandler, useState } from 'react';

type ChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>

const rating = [
  {value: 5, label: 'perfect'},
  {value: 4, label: 'perfect'},
  {value: 3, label: 'perfect'},
  {value: 2, label: 'perfect'},
  {value: 1, label: 'perfect'},
];

function ReviewForm(): JSX.Element {
  const [review, setReview] = useState({rating: 0, review: ''});

  const handleChange: ChangeHandler = (evt) => {
    const { name, value } = evt.currentTarget;
    setReview({...review, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
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
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.review.length < 50 || review.rating === 0 }
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
