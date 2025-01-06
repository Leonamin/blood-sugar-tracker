import { useCallback } from "react";
import { useAppDispatch } from "@/3_hook/useAppDispatch";
import { fetchBsRecords } from "@/8_store/bloodSugar/bloodSugarSlice";
import { useAppSelector } from "@/3_hook/useAppSelector";

export const useBloodSugarLoader = () => {
  const dispatch = useAppDispatch();
  const { currentLoadedFrom, currentLoadedTo, loading } = useAppSelector(
    (state) => state.bloodSugarRecords
  );

  const loadBloodSugarData = useCallback(
    async (from: Date, to: Date) => {
      // 이미 로딩 중이면 무시
      if (loading) {
        return;
      }

      const isInitialLoading = !currentLoadedFrom && !currentLoadedTo;

      // 요청된 범위가 현재 로드된 범위 내에 있는지 확인
      const isWithinLoadedRange = currentLoadedFrom && currentLoadedTo && 
        from >= currentLoadedFrom && to <= currentLoadedTo;

      // 이미 로드된 범위 내에 있다면 새로운 요청을 하지 않음
      if (isWithinLoadedRange && !isInitialLoading) {
        console.log("이미 로드된 범위 내에 있음", from, to);
        return;
      }
      console.log("새로운 요청" , from, to);

      // 초기 로딩이거나 범위를 벗어난 경우에만 새로운 데이터를 요청
      await dispatch(fetchBsRecords({ from, to }));
    },
    [dispatch, currentLoadedFrom, currentLoadedTo, loading]
  );

  return { loadBloodSugarData };
};
