import { useState } from "react";

export const SelectCity = ({ onSetCity, selectedCity }) => {
  const handleChangeCity = ({ target }) => {
    onSetCity(target.value);
  };

  return (
    <form>
      <select
        className="form-select"
        value={selectedCity}
        onChange={handleChangeCity}
      >
        <option value="miCity">Mi ciudad</option>
        <option value="1">Bogotá</option>
        <option value="2">Madrid</option>
        <option value="3">Londres</option>
        <option value="4">Paris</option>
        <option value="5">Montevideo</option>
      </select>
    </form>
  );
};
