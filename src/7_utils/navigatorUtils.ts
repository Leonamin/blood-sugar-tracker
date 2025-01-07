import { CRUDType } from '@/0_model/types/CRUDType';
import { NavigateFunction } from 'react-router-dom';

export const NavigatorUtils = {
  navigateToBsDetail(
    navigate: NavigateFunction,
    id?: string,
    crudType?: CRUDType,
    dateTime?: Date,
  ) {
    navigate(`/record-detail?id=${id}&crudType=${crudType}&dateTime=${dateTime?.toISOString()}`);
  }
}
