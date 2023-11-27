import React, { useState, useEffect } from 'react';

export function Fecha() {
    const [fechaActual, setFechaActual] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFechaActual(new Date());
    }, 1000); // Actualiza la fecha cada segundo

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, []);

  const Weekday = { weekday: 'long' };
  const Day = { day: 'numeric' };
  const formatoMonth = { month: 'long' };

  return (
    <div>
      <h1>Fecha actual:</h1>
      <p>{fechaActual.toLocaleDateString('en-US', Weekday)}, {fechaActual.toLocaleDateString('en-US', Day)}</p>
      <p>{fechaActual.toLocaleDateString('en-US', formatoMonth)}</p>

    </div>
  );
}