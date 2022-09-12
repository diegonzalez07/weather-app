import { render, screen } from "@testing-library/react";
import { WeatherCard } from "../../src/components/WeatherCard";
import { getFormatBy } from "../../src/utils/dateUtils";

describe("Test en <WeatherCard />", () => {
  const mockData = {
    id: 1,
    atmosphericPressure: 2,
    hour: "2022-09-12 06:00:00",
    humidity: 3,
    icon: "icon",
    temperature: 1234,
    thermalSensation: 456,
  };
  test("Debe hacer match con Snapshot", () => {
    const { container } = render(<WeatherCard {...mockData} />);

    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar imagen con url y alt indicado", () => {
    render(<WeatherCard {...mockData} />);

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(`http://openweathermap.org/img/w/${mockData.icon}.png`);
    expect(alt).toBe(`${mockData.icon}_${mockData.id}`);
  });

  test("Debe mostrar el titulo en el componente", () => {
    render(<WeatherCard {...mockData} />);

    expect(
      screen.getByText(
        `${getFormatBy("day", mockData.hour)} | ${getFormatBy(
          "hour",
          mockData.hour
        )} hs.`
      )
    ).toBeTruthy();
  });
});
