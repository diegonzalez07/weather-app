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
        <option value="bogota">Bogotá</option>
        <option value="madrid">Madrid</option>
        <option value="londres">Londres</option>
        <option value="parís">Paris</option>
        <option value="montevideo">Montevideo</option>
      </select>
    </form>
  );
};
