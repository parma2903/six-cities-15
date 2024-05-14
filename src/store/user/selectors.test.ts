import { NameSpace } from '../../const';
import { getAuthorizationStatus, getUser } from './selectors';
import { AuthorizationStatus } from '../../const';
import { makeFakeUserData } from '../../mocksTest';

const fakeUser = makeFakeUserData();
const fakeState = {
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    user: fakeUser,
  }
};

describe('Offer selectors', () => {
  describe('getAuthorizationStatus', () => {
    it('returns the status of user authorization', () => {
      const result = getAuthorizationStatus(fakeState);

      expect(result).toBe('NO_AUTH');
    });
  });

  describe('getUser', () => {
    it('returns user', () => {
      const expectedResult = fakeState[NameSpace.User].user;
      const result = getUser(fakeState);

      expect(result).toEqual(expectedResult);
    });
  });
});
