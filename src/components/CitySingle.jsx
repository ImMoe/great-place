import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CityContext from "../context/CityContext";
import { motion } from "framer-motion";

function CityCard({ city }) {
  const value = useContext(CityContext);
  return (
    <motion.div
      animate={{ x: [-999, 100, 0], scale: 1 }}
      className="w-1/2 bg-white mb-5 mx-auto rounded-sm drop-shadow-md"
    >
      <img src={city.url} className="w-full h-80 object-cover" />
      <div className="text-2xl text-center py-2">{city.title}</div>
      <div className="text-xl text-center pb-4">{city.description}</div>
      <div className="flex gap-2 pb-4 justify-center">
        <Link
          to={"/cities/" + city.id}
          className="bg-blue-400 text-white font-bold py-2 px-4 rounded-sm"
        >
          Read More
        </Link>
        <button
          onClick={() => value._delete(city.id)}
          className="bg-red-600 text-white font-bold py-2 px-4 rounded-sm"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
}

export default CityCard;
