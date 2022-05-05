import { createContext, useEffect, useState } from "react";

const CityContext = createContext();

export const CityContextProvider = ({ children }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getCities();
  }, []);

  async function getCities() {
    const cities = await fetch("http://localhost:1232/cities");
    const result = await cities.json();
    setCities(result.reverse());
  }
  async function add(title, description, country, url, navigate) {
    if (
      title.length === 0 ||
      description.length === 0 ||
      country.length === 0 ||
      url.length === 0
    )
      return false;
    const newCity = await fetch("http://localhost:1232/cities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, country, url }),
    });
    navigate("/");
  }
  async function _delete(id) {
    await fetch("http://localhost:1232/cities/" + id, {
      method: "DELETE",
    });
    getCities();
  }
  return (
    <CityContext.Provider
      value={{
        cities,
        getCities,
        add,
        _delete,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

export default CityContext;
