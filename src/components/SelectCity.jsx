import { useState } from "react";

export const SelectCity = () => {
  const [cityValue, setCityValue] = useState("0");

  const handleSelectCity = ({ target }) => {
    setCityValue(target.value);
  };

  return (
    <form>
      <select
        className="form-select"
        value={cityValue}
        onChange={handleSelectCity}
      >
        <option value="0">Mi ciudad</option>
        <option value="1">Bogotá</option>
        <option value="2">Madrid</option>
        <option value="3">Londres</option>
        <option value="4">Paris</option>
        <option value="5">Montevideo</option>
      </select>
    </form>
  );
};
