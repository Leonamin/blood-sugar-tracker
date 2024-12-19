// viewmodels/useBloodSugar.js
import { useState } from "react";
import { BloodSugarService } from "@/2_services/bloodSugarService.js";
import { BloodSugarWriteProps } from "@/0_model/model/bloodSugarModel";
import { UnixTimestampRange } from "@/0_model/types/unixtimestamp";

const bloodSugarService = new BloodSugarService();

export function useHome() {
  const [bloodSugars, setBloodSugars] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBloodSugars = async (query: UnixTimestampRange) => {
    setLoading(true);
    try {
      const data = await bloodSugarService.getBloodSugarByRange(
        new Date(query.from),
        new Date(query.to),
      );
      setBloodSugars(data);
    } finally {
      setLoading(false);
    }
  };

  const addBloodSugar = async (value: number) => {
    setLoading(true);
    try {
      await bloodSugarService.createBloodSugar({
        value,
        unit: "mg/dL",
        recordedDate: new Date().toISOString(),
      });
    } finally {
      setLoading(false);
    }
  };

  return { bloodSugars, loading, fetchBloodSugars, addBloodSugar };
}
