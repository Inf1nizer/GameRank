import React from "react";
import "./Favourites.css";
import RDR2Logo from "../assets/RDR2_logo.png";
import Aurthur from "../assets/Aurthur.png";
import RDR2 from "../assets/RDR2.jpg";
import AS2Logo from "../assets/AS2_logo.png";
import AS2 from "../assets/AS2.jpg";
import Ezio from "../assets/Ezio.png";
import MW2 from "../assets/MW2.jpg";
import MW2Logo from "../assets/MW2_logo.png";
import Ghost from "../assets/Ghost.png";
import { Link } from "react-router-dom";

const Favourites = () => {
  return (
    <div className="favourites">
      <h2>MY FAVOURITES</h2>
      <div className="games">
        <Link to={"/gamerating/0"}>
          <div className="RDR2">
            <img
              className="fav_logo"
              src={RDR2Logo}
              alt="RDR2_logo"
              width={250}
              height={50}
            />
            <img
              className="front-image"
              src={Aurthur}
              alt="Aurthur"
              width={250}
              height={350}
            />
            <img
              className="bg-image"
              src={RDR2}
              alt="RDR2"
              width={250}
              height={350}
            />
          </div>
        </Link>

        <Link to={"/gamerating/1"}>
          <div className="RDR2">
            <img
              className="fav_logo"
              src={AS2Logo}
              alt="AS2_logo"
              width={250}
              height={50}
            />
            <img
              className="front-image"
              src={Ezio}
              alt="Ezio"
              width={250}
              height={350}
            />
            <img
              className="bg-image"
              src={AS2}
              alt="AS2"
              width={250}
              height={350}
            />
          </div>
        </Link>
        <Link to={"/gamerating/2"}>
          <div className="RDR2">
            <img
              className="fav_logo"
              src={MW2Logo}
              alt="MW2_logo"
              width={250}
              height={50}
            />
            <img
              className="front-image"
              src={Ghost}
              alt="Ghost"
              width={300}
              height={350}
            />
            <img
              className="bg-image"
              src={MW2}
              alt="MW2"
              width={250}
              height={350}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Favourites;
