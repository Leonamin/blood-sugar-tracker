import React, { useEffect, useState } from "react";
import { useHome } from "@/5_viewmodels/home/useHome";
import SolidButton from "@/1_components/ui/button/solid-button";
import { dateToUnixTimestamp } from "@/0_model/types/unixtimestamp";
import BloodSugarRecordTile from "@/6_view/home/0_components/BloodSugarRecordTile";
import BloodSugarInputForm from "@/6_view/home/0_components/BloodSugarInputForm";

const Home = () => {
  const { bloodSugars, loading, fetchBloodSugars, addBloodSugar } = useHome();
  const [value, setValue] = useState("");
  const [memo, setMemo] = useState("");

  const startDate = new Date(new Date().setDate(new Date().getDate() - 15));
  const endDate = new Date(new Date().setDate(new Date().getDate() + 15));

  useEffect(() => {
    fetchBloodSugars({
      from: dateToUnixTimestamp(startDate),
      to: dateToUnixTimestamp(endDate),
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!value) return;

    await addBloodSugar(parseInt(value), memo);
    await fetchBloodSugars({
      from: dateToUnixTimestamp(startDate),
      to: dateToUnixTimestamp(endDate),
    });

    // 입력 폼 초기화
    setValue("");
    setMemo("");
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4 color-bg-primary pb-20 min-h-screen">
      <BloodSugarInputForm />
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
      {bloodSugars.length > 0 && <div>
        <span
          className="text-body1sb color-text-primary py-2">내 기록</span>
        <ul className="space-y-2">
          {bloodSugars.map((sugar) => (
            <li key={sugar.uid}>
              <BloodSugarRecordTile bloodSugar={sugar} />
            </li>
          ))}
        </ul>
      </div>}
    </div >
  );
}

export default Home;