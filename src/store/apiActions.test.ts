import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from 'redux';
import { AppThunkDispatch, extractActionsTypes } from '../mocksTest';
import { State } from '../types/offers';
import { checkAuthAction } from './apiActions';
import { APIRoute } from '../const';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({ });
  });

  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled: with thunk "checkAuthAction"', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200);
      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });
  });
});
