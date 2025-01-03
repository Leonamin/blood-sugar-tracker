import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import BloodSugarModel from '@/0_model/model/bloodSugarModel';
import { DateUtils } from '@/7_utils/dateUtils';

// 기본 선택자
const selectBloodSugarRecords = (state: RootState) => state.bloodSugarRecords.records;

// Props를 Model로 변환하는 선택자
export const selectBloodSugarModels = createSelector(
  [selectBloodSugarRecords],
  (records): BloodSugarModel[] => records.map(props => new BloodSugarModel(props))
);

// 모든 데이터를 가져오는 선택자
export const selectBloodSugarModelsAll = createSelector(
  [selectBloodSugarModels],
  (models): BloodSugarModel[] => models
);

// 특정 날짜의 기록만 필터링하는 선택자
export const selectBloodSugarModelsByDate = createSelector(
  [selectBloodSugarModels, (_, date: Date) => date],
  (models, date): BloodSugarModel[] => {
    const targetDate = DateUtils.dateToYMD(date);
    return models.filter(model => 
      DateUtils.dateToYMD(model.recordedAtToDate()) === targetDate
    );
  }
);

// 특정 ID의 기록을 찾는 선택자
export const selectBloodSugarModelById = createSelector(
  [selectBloodSugarModels, (_, id: string) => id],
  (models, id): BloodSugarModel | undefined => 
    models.find(model => model.uid === id)
); 