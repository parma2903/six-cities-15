import { FetchStatus, NameSpace } from '../../const';
import { Reviews, State } from '../../types/offers';

export const getReviews = (state: Pick<State, NameSpace.Reviews>): Reviews => state[NameSpace.Reviews].reviews;
export const getReviewsStatus = (state: Pick<State, NameSpace.Reviews>): FetchStatus => state[NameSpace.Reviews].reviewStatus;
