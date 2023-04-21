import React, { useState } from "react";
import "./Passengers.css";
// Declaramos el componente Passengers como una función que recibe dos parámetros: state y send
export const Passengers = ({ state, send }) => {
  // Obtenemos el array de pasajeros desde el contexto del estado de la máquina de estados
  const { passengers } = state.context;
  // Declaramos el estado "value" y la función "changeValue" para el input del nombre del pasajero
  const [value, changeValue] = useState("");
  // Declaramos la función onChangeInput, que actualiza el estado "value" con el valor actual del input
  const onChangeInput = (e) => {
    changeValue(e.target.value);
  };
  // Declaramos la función goToTicket, que llama a send con el argumento 'DONE' al ser ejecutada
  const goToTicket = () => {
    send("DONE");
  };
  // Declaramos la función submit, que llama a send con el argumento 'ADD' y el objeto { newPassenger: value } al ser ejecutada,
  // además de resetear el estado "value" a una cadena vacía
  const submit = (e) => {
    e.preventDefault(); // Prevenimos el comportamiento por defecto del evento submit
    send("ADD", { newPassenger: value }); // Enviamos el evento 'ADD' a la máquina de estados, junto con el nuevo pasajero
    changeValue(""); // Reseteamos el estado "value" a una cadena vacía
  };

  return (
    <form onSubmit={submit} className="Passengers">
      <p className="Passengers-title title">
        Agrega a las personas que van a volar ✈️
      </p>
      {/* Listado de pasajeros ya agregados */}
      {passengers.map((passenger, idx) => (
        <p className="text" key={`${passenger}${idx}`}>
          {passenger}
        </p>
      ))}{" "}
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Escribe el nombre completo"
        required
        value={value} // El valor del input se actualiza con el estado "value"
        onChange={onChangeInput} // // La función onChangeInput se ejecuta cada vez que el input cambia
      />
      <div className="Passengers-buttons">
        {" "}
        {/* Div para contener los botones de acción */}
        {/* El botón submit ejecuta la función "submit" al ser presionado */}
        <button className="Passengers-add button-secondary" type="submit">
          Agregar Pasajero
        </button>
        <button
          className={`Passenger-pay button ${
            passengers.length === 0 ? "Passenger-disabled" : ""
          }`}
          type="button" // El botón no es de tipo submit, no envía el formulario, sino que ejecuta la función "goToTicket" al ser presionado
          onClick={goToTicket}
        >
          Ver mi ticket
        </button>
      </div>
    </form>
  );
};
