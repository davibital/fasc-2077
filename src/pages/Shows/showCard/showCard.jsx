import React from "react";
import styles from "./ShowCard.module.css"; // Importando o CSS

export default function ShowCard({ show }) {
  return (
    <div className={styles.card}>
      <img src={show.imgUrl} alt={show.name} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{show.name}</h2>
        <p><strong>Descrição:</strong> {show.description}</p>
        <p><strong>Tipo:</strong> {show.type}</p>
        <p><strong>Data de Início:</strong> {new Date(show.startDate).toLocaleString()}</p>
        <p><strong>Data de Término:</strong> {new Date(show.endDate).toLocaleString()}</p>
        <p><strong>Localização:</strong> {show.location}</p>
      </div>
    </div>
  );
}
