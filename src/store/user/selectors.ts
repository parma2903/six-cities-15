import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/offers';
import { UserData } from '../../types/offers';

export const getAuthorizationStatus = (state: Pick<State, NameSpace.User>): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUser = (state: Pick<State, NameSpace.User>): UserData | null => state[NameSpace.User].user;
