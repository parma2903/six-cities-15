import { TIMEOUT_SHOW_ERROR } from '../const';
import { store } from '../store';
import { clearError, setError } from '../store/error/error';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError({ error: message }));
  setTimeout(() => {
    store.dispatch(clearError());
  }, TIMEOUT_SHOW_ERROR);
};
