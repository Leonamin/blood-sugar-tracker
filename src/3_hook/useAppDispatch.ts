import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/8_store/store';

export const useAppDispatch: () => AppDispatch = useDispatch;