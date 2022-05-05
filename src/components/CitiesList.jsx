import { useContext, useEffect } from "react";
import CityContext from "../context/CityContext";
import CitySingle from "./CitySingle";
function CitiesList() {
  const value = useContext(CityContext);
  useEffect(() => {
    value.getCities();
  }, []);
  return (
    <div className="mt-5">
      {value.cities.map((city) => (
        <CitySingle city={city} key={city.id} />
      ))}
    </div>
  );
}

export default CitiesList;
