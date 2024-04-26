import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/offers';
import { UserData } from '../../types/offers';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUser = (state: State): UserData | null => state[NameSpace.User].user;
