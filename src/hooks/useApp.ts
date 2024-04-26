import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch} from '../types/offers';
import { State } from '../types/offers';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
