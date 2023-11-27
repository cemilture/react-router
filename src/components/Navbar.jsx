import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/aboutus"}>About Us</NavLink>
      <NavLink to={"/history"}>History</NavLink>
      <NavLink to={"/members"}>Members</NavLink>
    </nav>
  );
}

export default Navbar;
