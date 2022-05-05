import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CityContext from "../context/CityContext";

function Add() {
  const navigation = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [url, setUrl] = useState("");
  const value = useContext(CityContext);

  function navigate(where) {
    navigation(where, { replace: true });
  }
  return (
    <div className="bg-white w-2/5 mx-auto mt-10 drop-shadow-md">
      <div className="bg-gray-200 text-gray-600 py-4 px-7 text-lg font-bold capitalize">
        Add your favorite city
      </div>
      <div className="flex flex-col gap-4 p-5">
        <input
          className="border border-gray-200 py-2 px-4 text-md rounded-md"
          type="text"
          placeholder="Which place should people visit?"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border border-gray-200 py-2 px-4 text-md resize-none rounded-md"
          type="text"
          placeholder="Describe why this place is awesome"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          className="border border-gray-200 py-2 px-4 text-md rounded-md"
          type="text"
          placeholder="Which country is the location at?"
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          className="border border-gray-200 py-2 px-4 text-md rounded-md"
          type="text"
          placeholder="Länk för bild"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-sm self-start"
          onClick={() => {
            value.add(title, description, country, url, navigate);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Add;
