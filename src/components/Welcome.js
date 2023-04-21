import React from "react";
import "./Welcome.css";

export const Welcome = ({ send }) => {
  // Función que se llama cuando se hace clic en el botón para comenzar a reservar
  const startBooking = () => {
    send("START");
  };

  return (
    <div className="Welcome">
      <p className="Welcome-title title">¡Hoy es el dia!</p>
      <p className="Welcome-description description">
        Compra tu vuelo y conoce un nuevo rincón del mundo, te va a sorprender
        las maravillas que hay para explorar
      </p>
      {/* Botón que inicia la reserva cuando se hace clic en él */}
      <button onClick={startBooking} className="Welcome-cancel button">
        Comenzar
      </button>
    </div>
  );
};
