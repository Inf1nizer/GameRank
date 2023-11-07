import React from "react";
import stars from "../assets/pngegg.png";
import MainPhoto from "../assets/rise-humanoids-with-advanced-hea-removebg-preview.png";
import AboutSite from "../Aboutsite/aboutsite";
import AboutBG from "../assets/Untitled_design-removebg-preview.png";
import Favourites from "../Favourites/Favourites";
import { useEffect } from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section>
        <img src={stars} id="stars" alt="bg" />
        <img src={MainPhoto} id="MainPhoto" alt="main_photo" />
        <h1 id="text1">GAME</h1>
        <h1 id="text2">RANK</h1>
        <a href="#abt" id="button">
          Expolre
        </a>
      </section>

      <div className="my_favourites">
        <Favourites />
      </div>

      <div className="Abt_site" id="abt">
        <img src={AboutBG} alt="aboutbg" id="aboutbg" />
        <AboutSite />
      </div>

      <script></script>

      {useEffect(() => {
        document.addEventListener("mousemove", (e) => {
          const mouseX = e.clientX;
          const mouseY = e.clientY;
          const anchor = document.getElementById("aboutbg");
          const imagetorot = document.getElementById("aboutbg");
          const rekt = anchor.getBoundingClientRect();
          const anchorX = rekt.left + rekt.width / 2;
          const anchorY = rekt.top + rekt.height / 2;

          const angle = (cx, cy, ex, ey) => {
            const dy = ey - cy;
            const dx = ex - cx;
            const rad = Math.atan2(dy, dx);
            const deg = (rad * 180) / Math.PI;
            return deg;
          };

          const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

          const rot = () => {
            imagetorot.style.transform = `rotate(${90 + angleDeg}deg)`;
          };

          document.addEventListener("mousemove", rot);

          return () => {
            document.removeEventListener("mousemove", rot);
          };
        });
      }, [])}

      {useEffect(() => {
        const stars = document.getElementById("stars");
        const mainphoto = document.getElementById("MainPhoto");
        const text1 = document.getElementById("text1");
        const text2 = document.getElementById("text2");
        const button = document.getElementById("button");

        const handleScroll = () => {
          let value = window.scrollY;
          stars.style.top = value * 0.25 + "px";
          mainphoto.style.left = value * 0.75 + "px";
          button.style.marginTop = value * 0.75 + "px";
          text1.style.marginInline = value * -0.75 + "px";
          text2.style.marginInline = value * -0.75 + "px";
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [])}
    </div>
  );
};

export default Home;
