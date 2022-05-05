import { NavLink } from "react-router-dom";

function NavigationLink({ to, label }) {
  return (
    <li>
      <NavLink to={to} activeclassname="active">
        {label}
      </NavLink>
    </li>
  );
}

export default NavigationLink;
