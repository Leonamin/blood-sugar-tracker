
import React, { useEffect } from "react";
import { useHome } from "@/5_viewmodels/home/useHome";

const Home = () => {
  const { bloodSugars, loading, fetchBloodSugars } = useHome();

  useEffect(() => {
    fetchBloodSugars();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {bloodSugars.map((sugar) => (
        <li key={sugar.uid}>
          {sugar.value} {sugar.unit} (Recorded on: {sugar.recordedDate})
        </li>
      ))}
    </ul>
  );
}

export default Home;