import React, { useEffect, useState } from "react";
import { fetchStages } from "@/api";

export default function StageList() {
  const [stages, setStages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStages()
      .then(data => setStages(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Palcos</h1>
      <ul>
        {stages.map(stage => (
          <li key={stage.name}>
            <h2>{stage.name}</h2>
            <p><strong>Localização:</strong> {stage.location}</p>
            <p><strong>História:</strong> {stage.history}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}