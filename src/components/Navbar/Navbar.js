import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";
import Icon from "@mdi/react";
import { mdiEggEaster } from "@mdi/js";
import { mdiHome } from "@mdi/js";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={logo} width={70} height={45} alt="Logo" />
      </Link>

      <div className="keep_left">
        <ul className="nav_menu">
          <CustomLink to="/">
            {" "}
            <Icon path={mdiHome} size={0.85} />{" "}
          </CustomLink>
          <CustomLink to="/genre"> GENRE </CustomLink>
          <CustomLink to="/goty"> GOTY </CustomLink>
          <CustomLink to="/about"> ABOUT ME </CustomLink>
          <CustomLink to="/easteregg">
            {" "}
            <Icon path={mdiEggEaster} size={0.85} />{" "}
          </CustomLink>
        </ul>
      </div>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
