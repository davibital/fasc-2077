
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchShows } from "@/api";

export default function ShowDetail() {
  const { showName } = useParams();
  const [show, setShow] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchShows()
      .then(data => {
        const foundShow = data.find(s => s.name === showName);
        setShow(foundShow);
      })
      .catch(err => setError(err.message));
  }, [showName]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{show.name}</h1>
      <img src={show.imgUrl} alt={show.name} style={{ width: "200px", height: "auto" }} />
      <p><strong>Descrição:</strong> {show.description}</p>
      <p><strong>Tipo:</strong> {show.type}</p>
      <p><strong>Data de Início:</strong> {new Date(show.startDate).toLocaleString()}</p>
      <p><strong>Data de Término:</strong> {new Date(show.endDate).toLocaleString()}</p>
      <p><strong>Localização:</strong> {show.location}</p>
    </div>
  );
}