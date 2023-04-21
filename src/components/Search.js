import React, { useState } from "react";
import "./Search.css";

export const Search = ({ state, send }) => {
  // Estado local que almacena el destino del vuelo seleccionado
  const [flight, setFlight] = useState("");
  // Función que se llama al presionar el botón "Continuar" y que envía el evento "CONTINUE" con el destino seleccionado
  const goToPassengers = () => {
    send("CONTINUE", { selectedCountry: flight });
  };
  // Función que se llama cada vez que se selecciona un destino y actualiza el estado local con el valor seleccionado
  const handleSelectChange = (event) => {
    setFlight(event.target.value);
  };
  // Lista de opciones para el select que se renderiza a partir del estado global "countries"
  const options = state.context.countries;

  return (
    <div className="Search">
      <p className="Search-title title">Busca tu destino</p>
      {/* Select para escoger el país de destino del vuelo */}
      <select
        id="country"
        className="Search-select"
        value={flight}
        onChange={handleSelectChange}
      >
        {/* Opción predeterminada desactivada */}
        <option value="" disabled defaultValue>
          Escoge un país
        </option>
        {/* Mapeo de la lista de opciones a elementos "option" del select */}
        {options.map((option) => (
          <option value={option.name.common} key={option.name.common}>
            {option.name.common}
          </option>
        ))}
      </select>
      {/* Botón "Continuar" para ir a la sección de pasajeros */}
      <button
        onClick={goToPassengers}
        disabled={flight === ""}
        className="Search-continue button"
      >
        Continuar
      </button>
    </div>
  );
};
