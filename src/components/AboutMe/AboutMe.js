import React, { useEffect, useRef } from "react";
import figure from "../assets/purple-yeti-cartoon-sitting-chair-removebg-preview.png";
import bg from "../assets/5532808.jpg";
import python from "../assets/python.png";
import C from "../assets/C.png";
import C2 from "../assets/c++.png";
import Java from "../assets/java.png";
import C3 from "../assets/c2.png";
import SQL from "../assets/sql.png";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import JS from "../assets/JS.png";
import Rct from "../assets/react.png";
import Next from "../assets/Next.png";
import Mongo from "../assets/Mongo.png";
import hotel from "../assets/hotel_img.png";
import movie from "../assets/movie.jpg";
import stock from "../assets/stock.png";

import emailjs from "@emailjs/browser";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";
import "./AboutMe.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { School, Work } from "@mui/icons-material";

const AboutMe = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a9lmi0s",
        "template_s2yi14b",
        formRef.current,
        "D01KVQDRR5lzTTXVI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <section className="banner" id="bnr">
        <img src={bg} alt="bg" id="bbg" />
        <div className="banner_left" id="b_l">
          <h1>WELCOME TO MY PORTFOLIO</h1>
          <h1 className="banner_text">Hi I'm Ananth Agarwal</h1>
          <p>
            Highly motivated computer science student at{" "}
            <strong>VIT university </strong> with a{" "}
            <strong>CGPA of 8.8*</strong>, seeking opportunities to apply my
            technical skills and knowledge in a dynamic and challenging
            environment. Possessing a solid foundation in programming,
            algorithms, and data structures, I am adept at problem-solving and
            have a strong attention to detail. With a passion for continuous
            learning, I am eager to contribute to innovative projects while
            collaborating with diverse teams.
          </p>
          <a href="#connect" className="connect_btn">
            Let's Connect
          </a>
          <a
            href="https://drive.google.com/file/d/19SiD_UNwnIneend_r8I5kHoD3imr0JEQ/view?usp=sharing"
            target="_blanc"
            className="connect_btn"
          >
            View Resume
          </a>
        </div>
        <div className="banner_right" id="b_r">
          <img src={figure} alt="figure" />
          <div className="shadow"></div>
        </div>
      </section>

      <div className="experience">
        <h1>Experience</h1>
        <div className="timeline">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<Work />}
            >
              <h3 className="vertical-timeline-element-title">
                Ipseity Network
              </h3>
              <p>Full Stack Engineering Internship</p>
              <p>Sep 2023 - Dec 2023</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<Work />}
            >
              <h3 className="vertical-timeline-element-title">Whirlpool</h3>
              <p>Salesforce Internship</p>
              <p>Aug 2023 - Sep 2023</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<Work />}
            >
              <h3 className="vertical-timeline-element-title">DigiDab</h3>
              <p>Full Stack Developer Internship</p>
              <p>July 2022 - Nov 2022</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<Work />}
            >
              <h3 className="vertical-timeline-element-title">
                Peach Advisory
              </h3>
              <p>Data Scientist Internship</p>
              <p>Oct 2022 - Feb 2022</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{ background: "#E49B0F", color: "#fff" }}
              icon={<School />}
            >
              <h3 className="vertical-timeline-element-title">
                Vellore Institute of Engineering
              </h3>
              <p>B-Tech (CSE core)</p>
              <p>2021 - Present</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>

      <div className="experience2">
        <h2>Skills</h2>
        <div className="skills">
          <div className="skills_part">
            <img src={python} alt="lol" height={150} width={150} />
            <img src={C} alt="lol" height={150} width={150} />
            <img src={C2} alt="lol" height={150} width={150} />
          </div>
          <div className="skills_part">
            <img src={Java} alt="lol" height={150} width={150} />
            <img src={C3} alt="lol" height={230} width={230} />
            <img src={SQL} alt="lol" height={100} width={150} />
          </div>
          <div className="skills_part">
            <img src={Next} alt="lol" height={140} width={140} />
            <img src={Mongo} alt="lol" height={140} width={140} />
            <img src={Rct} alt="lol" height={140} width={140} />
          </div>
          <div className="skills_part">
            <img src={HTML} alt="lol" height={150} width={150} />
            <img src={JS} alt="lol" height={150} width={150} />
            <img src={CSS} alt="lol" height={150} width={150} />
          </div>
        </div>
      </div>

      <section className="banner2">
        <img src={bg} alt="bg" id="bbg" />
        <div className="contact">
          <h3>Projects</h3>
          <div className="project_card">
            <img src={hotel} alt="prj_img" width={500} height={300} />
            <h4>Hotel Application</h4>
            <p>
              This is a full-stack web application using the latest web
              development technologies including React, Tailwind, Prisma,
              MongoDB, and NextAuth.
            </p>
            <Link
              to={"https://github.com/Inf1nizer/HotelsPro_NextJS"}
              target="_blanc"
              className="project_link"
            >
              View
            </Link>
          </div>

          <div className="project_card">
            <img src={movie} alt="prj_img" width={500} height={300} />
            <h4>Movie Recommender</h4>
            <p>
              Powered by cutting-edge algorithms, this system learns your unique
              preferences, diving into the depths of your viewing history and
              taste palette. It's like having a personal movie guru, suggesting
              hidden gems and blockbusters alike.
            </p>
            <Link
              to={"https://github.com/Inf1nizer/Movie_Recommender"}
              target="_blanc"
              className="project_link"
            >
              View
            </Link>
          </div>

          <div className="project_card">
            <img src={stock} alt="prj_img" width={500} height={300} />
            <h4>Stock Price Forecastor</h4>
            <p>
              This is deeplearning and machine learning project, I have used the
              concept of data scrapping, cleaning and visualisation using
              jupyter notebook. Used Anaconda libraries for model prediction and
              fitting.
            </p>
            <Link
              to={"https://github.com/Inf1nizer/Stock_Price_forecaster"}
              target="_blanc"
              className="project_link"
            >
              View
            </Link>
          </div>
        </div>

        <div className="contact" id="connect">
          <h3>Contact Me</h3>
          <div className="abt_info">
            <div className="abt_info2">
              <h4>Phone No.</h4>
              <p>+91 9718840751</p>
            </div>
            <div className="abt_info2">
              <h4>E-Mail</h4>
              <p>ananthagarwal2910@gmail.com</p>
            </div>
          </div>

          <div className="formContainer">
            <form ref={formRef} onSubmit={sendEmail}>
              <input type="text" required placeholder="Name" name="from_name" />
              <input
                type="email"
                required
                placeholder="Email"
                name="user_email"
              />
              <textarea rows={8} placeholder="Message" name="message" />
              <button>SUBMIT</button>
            </form>
          </div>

          <div className="abt_info">
            <Link
              to={"https://github.com/Inf1nizer"}
              target="_blanc"
              className="abt_icon"
            >
              <GitHubIcon />
            </Link>
            <Link
              to={"https://instagram.com/agarwalananth?igshid=MzMyNGUyNmU2YQ=="}
              target="_blanc"
              className="abt_icon"
            >
              <InstagramIcon />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/ananth-agarwal-8b612a220/"}
              target="_blanc"
              className="abt_icon"
            >
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </section>

      {useEffect(() => {
        const bg = document.getElementById("bbg");
        const bl = document.getElementById("b_l");
        const br = document.getElementById("b_r");

        const handleScroll = () => {
          let value = window.scrollY;
          bg.style.top = value * 0.65 + "px";
          bl.style.marginInline = value * -0.5 + "px";
          br.style.marginInline = value * -0.5 + "px";
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [])}
    </div>
  );
};

export default AboutMe;
