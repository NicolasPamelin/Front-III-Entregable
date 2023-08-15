import React from "react";
import "./Card.css";

function Card({ title, description, id, deleteTask }) {
  return (
    <article className="card_task">
      <div className="content_card">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="btn_container">
        <button onClick={() => deleteTask(id)} className="btn_delete">
          Eliminar Tarea
        </button>
      </div>
    </article>
  );
}

export default Card;
