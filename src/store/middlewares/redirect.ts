import { PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../../browserHistory';
import { Middleware } from 'redux';
import { rootReducer } from '../root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'REDIRECT_TO_ROUTE') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
