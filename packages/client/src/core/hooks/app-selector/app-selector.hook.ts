import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../../../store';

export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
