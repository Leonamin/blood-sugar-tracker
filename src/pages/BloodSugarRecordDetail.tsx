import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useBloodSugarRecordDetail } from '@/5_viewmodels/bloodSugarRecordDetail/useBloodSugarRecordDetail';

const BloodSugarRecordDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    recordDetail,
    fetchRecordDetail,
    updateBloodSugar,
    deleteBloodSugar,
  } = useBloodSugarRecordDetail();

  // 쿼리 파라미터에서 uid 추출
  const query = new URLSearchParams(location.search);
  const uid = query.get('id');

  useEffect(() => {
    fetchRecordDetail(uid);
  }, []);

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-primary text-white rounded-lg"
      >
        뒤로 가기
      </button>
      <h1 className="text-2xl font-bold">상세 페이지</h1>
      {recordDetail ? (
        <div>
          <p>UID: {recordDetail.uid}</p>
          <p>Value: {recordDetail.value}</p>
          <p>Recorded At: {recordDetail.recordedAt}</p>
          <p>Memo: {recordDetail.memo}</p>
          {/* 필요한 다른 정보들 */}
        </div>
      ) : (
        <p>로딩 중이거나 데이터를 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default BloodSugarRecordDetail; 