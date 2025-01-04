import { CRUDType } from '@/0_model/types/CRUDType';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export namespace NavigatorUtils {
  export function navigateToBsDetail(
    navigate: NavigateFunction,
    id?: string,
    crudType?: CRUDType,
  ) {
    navigate(`/record-detail?id=${id}&crudType=${crudType}`);
  }
}
