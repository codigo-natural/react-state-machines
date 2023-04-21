import React from "react";
import "./Nav.css";
// Declaramos el componente Nav como una función que recibe dos parámetros: state y send
export const Nav = ({ state, send }) => {
  // Declaramos la función goToWelcome, que llama a send con el argumento 'CANCEL' al ser ejecutada
  const goToWelcome = () => {
    send("CANCEL");
  };

  return (
    <nav className="Nav">
      <h1 className="Nav-logo">Book a fly 🛩️</h1>
      {
        // Usamos una expresión ternaria para mostrar el botón "Cancelar" solamente en ciertos estados
        !state.matches("initial") && !state.matches("tickets") && (
          <button onClick={goToWelcome} className="Nav-cancel button-secondary">
            Cancelar
          </button>
        )
      }
    </nav>
  );
};
