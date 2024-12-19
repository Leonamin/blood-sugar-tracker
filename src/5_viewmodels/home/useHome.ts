// viewmodels/useBloodSugar.js
import { useState } from "react";
import { BloodSugarService } from "@/2_services/bloodSugarService.js";

const bloodSugarService = new BloodSugarService();

export function useHome() {
  const [bloodSugars, setBloodSugars] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBloodSugars = async (query) => {
    setLoading(true);
    try {
      const data = await bloodSugarService.getBloodSugarList(query);
      setBloodSugars(data);
    } finally {
      setLoading(false);
    }
  };

  const addBloodSugar = async (data) => {
    setLoading(true);
    try {
      await bloodSugarService.addBloodSugar(data);
    } finally {
      setLoading(false);
    }
  };

  return { bloodSugars, loading, fetchBloodSugars, addBloodSugar };
}
