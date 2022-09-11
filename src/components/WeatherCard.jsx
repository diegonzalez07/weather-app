import { format } from "date-fns";
import { getFormatBy } from "../utils/dateUtils";

export const WeatherCard = ({ weatherHour }) => {
  const { hour } = weatherHour;
  return (
    <div className="card mb-3">
      <h5 className="card-header">
        {`${getFormatBy("day", hour)} | ${getFormatBy("hour", hour)} hs.`}
      </h5>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
