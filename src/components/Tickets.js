import React from "react";
import "./Tickets.css";

export const Tickets = ({ send, context }) => {
  const finish = () => {
    send("FINISH"); // Función que llama al evento 'FINISH' cuando se hace click en el botón de Finalizar
  };

  return (
    <div className="Tickets">
      <p className="Tickets-description description">
        Gracias por volar con book a fly 💚
      </p>
      <div className="Tickets-ticket">
        <div className="Tickets-country">Colombia</div>
        <div className="Tickets-passengers">
          <span>✈</span>
          {context.passengers.map((person, idx) => {
            // Muestra la lista de pasajeros agregados en el componente Passengers
            return <p key={idx}>{person}</p>; // Muestra cada pasajero en una nueva línea
          })}
        </div>
      </div>
      {/* Botón para finalizar la reserva y cerrar el proceso */}
      <button onClick={finish} className="Tickets-finalizar button">
        Finalizar
      </button>
    </div>
  );
};
