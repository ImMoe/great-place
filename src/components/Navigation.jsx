import AppBar from "@mui/material/AppBar";
import NavigationLink from "./NavigationLink";

function Navigation() {
  return (
    <div className="bg-blue-500 p-5 sticky top-0 z-10">
      <div className="container flex justify-between mx-auto">
        <div className="text-2xl text-white font-bold">Great Place</div>
        <ul className="flex gap-3 text-xl text-white">
          <NavigationLink to="/" label="Home" />
          <NavigationLink to="/add" label="Add new" />
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
