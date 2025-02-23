
import { fetchStages } from "@/api";
import { useState, useEffect } from "react";

export default function Stages() {
  const [stages, setStages] = useState([]);

  useEffect(() => {
    async function loadStages() {
      const data = await fetchStages();
      setStages(data);
    }
    loadStages();
  }, []);

  return (
    <div className="dark bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Palcos</h1>
      <div className="space-y-6">
        {stages.map((stage, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold">{stage.name}</h2>
            <p className="text-gray-400 mt-2">{stage.location}</p>
            <p className="mt-4">{stage.history}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
