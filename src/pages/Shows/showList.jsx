
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchShows } from "@/api";
import ShowCard from "./showCard/showCard";

export default function ShowList() {
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchShows()
      .then(data => setShows(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Shows</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {shows.map(show => (
          <div key={show.name}>
            <ShowCard show={show} />
            <Link to={`/shows/${show.name}`}>Ver detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  );
}