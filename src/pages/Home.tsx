import React, { useEffect, useState } from "react";
import { useHome } from "@/5_viewmodels/home/useHome";
import SolidButton from "@/1_components/ui/button/solid-button";

const Home = () => {
  const { bloodSugars, loading, fetchBloodSugars, addBloodSugar } = useHome();
  const [value, setValue] = useState("");
  const [memo, setMemo] = useState("");

  useEffect(() => {
    fetchBloodSugars({});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) return;

    const newRecord = {
      value: parseInt(value),
      unit: "mg/dL",
      memo: memo,
      recordedDate: new Date().toISOString(),
    };

    await addBloodSugar(newRecord);
    await fetchBloodSugars({});

    // 입력 폼 초기화
    setValue("");
    setMemo("");
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="space-y-4">
          <div>
            <label className="block mb-2">혈당 (mg/dL)</label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="border p-2 rounded"
              placeholder="혈당 수치 입력"
            />
          </div>
          <div>
            <label className="block mb-2">메모</label>
            <textarea
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              className="border p-2 rounded w-full"
              placeholder="메모 입력"
            />
          </div>
          <SolidButton
            color="primary"
            onClick={handleSubmit}
          >
            기록하기
          </SolidButton>
        </div>
      </form >

      <ul className="space-y-2">
        {bloodSugars.map((sugar) => (
          <li key={sugar.uid} className="border p-2 rounded">
            <div>혈당: {sugar.value} {sugar.unit}</div>
            {sugar.memo && <div>메모: {sugar.memo}</div>}
            <div className="text-sm text-gray-500">
              기록일시: {new Date(sugar.recordedDate).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div >
  );
}

export default Home;