import "./styles.css";
import React from "react";
import Container from "@material-ui/core/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from "@material-ui/core/Grid";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faReact,
  faPython,
  faNode,
  faPhp,
  faAngular,
  faJava,
  faAndroid,
  faAppStore,
  faFigma,
  faJs,
  faShopify,
  faWordpress,
  faDrupal,
  faFirefox,
  faSketch,
  faMagento,
} from "@fortawesome/free-brands-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    paddingTop: "50px",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Container className={classes.paper}>
            <img
              className="image"
              src="https://niharrout.com/assets/nihar-ranjan-rout.jpg"
              alt="profile"
            />
            <h1>
              Hi, I'm <span style={{ color: "#ff9901" }}>Nihar</span> <br />
              Sofware Engineer, Hobbyist Writer
            </h1>

            <p>
              Nihar Ranjan Rout is an enthusiastic software engineer delivering
              custom mobile applications and full-stack web development services
              to businesses. Based out in Bhubaneswar, have been working with
              clients all over the world.
            </p>
            <h5>FIND WITH ME</h5>

            <a href="https://www.youtube.com/" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com/" className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com/" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/iniharrout/"
              className="instagram social"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>

            <div>
              <a href="https://www.instagram.com/" className="blog social">
                Blog
              </a>
              <a
                href="https://www.instagram.com/iniharrout/"
                className="whatsapp social"
              >
                Whatsapp
              </a>
            </div>
            <div className="Feature">
              <h2>About Nihar</h2>
              <p>
                Going to a magic show and looking at how the magic happens was
                similar for me to watch at the computer screen and experience
                how it works all by itself, calculating things, providing us the
                result of whatever we searched and the list is still not in the
                count of mine. I undoubtedly grew up and failed to kill that
                curious and amazed child in me. And grew to be a software
                engineer in order to pave the way and give a direction to my
                fascinating world. Creating a user-centric digital experience is
                always what I wished to create, to get the user attracted,
                engaged, and then diverted towards the business. The initiation
                of my fascinating professional career with web and app
                development always had the goal to turn the ideas into real-life
                solutions. I have always been full of enthusiasm and technology
                gives life to the enthusiastic me!
                <div>
                  <br></br>
                </div>
                Currently, I have a team of talented heads from various
                technologies. And we together have created a vast variety of
                products and have provided services to a diverse range of cases
                across the globe to different business domains. The creation of
                world-class software products is what I have done for my clients
                with my extremely talented team. User-friendly websites and
                mobile applications with a customized and personalized blend are
                what we offer with a smooth user experience.
                <div>
                  <br></br>
                </div>
                <span style={{ color: "red", fontWeight: "bold" }}>
                  Let’s shake the hands if you are looking for a techie like me
                  to help you with driving an audience to your company or an
                  application or website that speaks for you rather than just
                  being available on the internet to be searched.
                </span>
              </p>
            </div>
            <div className="skils">
              <h2 style={{ textAlign: "left" }}>
                Technologies We Are Working With
              </h2>
              <h5 style={{ textAlign: "center" }}>PRIMARY SKILLS ON</h5>
              <a href="" className="python social">
                <FontAwesomeIcon icon={faPython} size="4x" />
              </a>
              <a href="/" className="node social">
                <FontAwesomeIcon icon={faNode} size="4x" />
              </a>

              <a href="" className="react social">
                <FontAwesomeIcon icon={faReact} size="4x" />
              </a>
              <a href="" className="appstore social">
                <FontAwesomeIcon icon={faAppStore} size="4x" />
              </a>
              <a href="" className="angular social">
                <FontAwesomeIcon icon={faAngular} size="4x" />
              </a>
              <a href="" className="php social">
                <FontAwesomeIcon icon={faPhp} size="4x" />
              </a>
              <a href="" className="android social">
                <FontAwesomeIcon icon={faAndroid} size="4x" />
              </a>
              <a href="" className="java social">
                <FontAwesomeIcon icon={faJava} size="4x" />
              </a>
              <a href="" className="figma social">
                <FontAwesomeIcon icon={faFigma} size="4x" />
              </a>
              <a href="" className="js social">
                <FontAwesomeIcon icon={faJs} size="4x" />
              </a>

              <h5 style={{ textAlign: "center" }}>SECONDARY SKILLS ON</h5>
              <a href="" className="shopify social">
                <FontAwesomeIcon icon={faShopify} size="3x" />
              </a>
              <a href="/" className="wordpress social">
                <FontAwesomeIcon icon={faWordpress} size="3x" />
              </a>

              <a href="" className="drupal social">
                <FontAwesomeIcon icon={faDrupal} size="3x" />
              </a>
              <a href="" className="firefox social">
                <FontAwesomeIcon icon={faFirefox} size="3x" />
              </a>
              <a href="" className="sketch social">
                <FontAwesomeIcon icon={faSketch} size="3x" />
              </a>
              <a href="" className="magento social">
                <FontAwesomeIcon icon={faMagento} size="3x" />
              </a>
              <a href="" className="diamond social">
                <FontAwesomeIcon icon={faAndroid} size="3x" />
              </a>
              <a href="" className="java social">
                <FontAwesomeIcon icon={faJava} size="3x" />
              </a>
              <a href="" className="figma social">
                <FontAwesomeIcon icon={faFigma} size="3x" />
              </a>
            </div>
            <div className="web">
              <h2 style={{ textAlign: "left" }}>Web Development</h2>
              <p style={{ fontSize: "23px", textAlign: "left" }}>
                Full cycle Web Development services with agile methodology to
                build high performing sites & apps at low price
              </p>
              <ul>
                <li>Web Design</li>
                <li>Custom Web App Development </li>
                <li>E-Commerce Solutions</li>
                <li>Product Re-Engineering</li>
                <li>CMS Development</li>
              </ul>
            </div>
            <div className="web2" style={{ marginTop: "100px" }}>
              <h2 style={{ textAlign: "left" }}>Mobile App Development</h2>
              <p style={{ fontSize: "23px", textAlign: "left" }}>
                Enterprise mobility solutions for a wide range of industries
                specializing in both native and hybrid apps
              </p>

              <ul>
                <li>Android App Development </li>
                <li>iPhone App Development</li>
                <li>Cross platform App Development</li>
                <li>Custom Mobile App</li>
                <li>Wearable App Development</li>
              </ul>
            </div>
            <div className="Feature">
              <p style={{ color: "red", fontSize: "15PX" }}>
                WHY YOU SHOULD CHOOSE NIHAR AS YOUR NEXT WEB OR MOBILE
                APPLICATION DEVELOPMENT PARTNER
              </p>
              <h2 style={{ color: "#c4cfde", fontSize: "30px" }}>Why Nihar</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in
                eos saepe ipsa cupiditate accusantium voluptatibus quidem nam,
                reprehenderit, et necessitatibus adipisci.
              </p>
              <h4>Knowledge about the different industry sectors:</h4>
              <ul className="tick">
                <p>
                  <span className="ticksign">&#10003;</span>
                  You don’t have to worry about the lost human touch and
                  emotions. The depth of knowledge and experience that I have
                  gained while working in different sectors is something that I
                  have for you in stock to surprise with
                </p>
              </ul>
              <h4>Years of experience & expertise:</h4>
              <ul className="tick">
                <p>
                  <span className="ticksign">&#10003;</span>
                  They say: age is just a number, what I believe is they said it
                  right. As my years of experience is way more than what I carry
                  on my certificates. The expertise and experience are reflected
                  in my work.
                </p>
              </ul>
              <h4>To not just have a professional, working human-robot:</h4>
              <ul className="tick">
                <p>
                  <span className="ticksign">&#10003;</span>
                  What you pay for, you get more than that. I don’t believe in
                  extracting just your hard-earned money of yours. The best
                  solution for your requirement is what I would suggest to you,
                  even if it doesn't sound soothing to your ears, it assuredly
                  would be beneficial for your business.
                </p>
              </ul>
              <h4>Happy mates:</h4>
              <ul className="tick">
                <p>
                  <span className="ticksign">&#10003;</span>
                  My happy mates have stories and experiences to share. They
                  were once my client and now we have a relationship built out
                  of trust and satisfaction. In the years that I have dedicated
                  to this profession, I have built relations rather than a mere
                  business world.
                </p>
              </ul>
              <h4>Someone to understand what your heart wants:</h4>
              <ul className="tick">
                <p>
                  <span className="ticksign">&#10003;</span>
                  Business is not just about the service, you initiated it with
                  some emotions attached, and growing your business means
                  enhancing love for what your heart justifies. I understand
                  what is best for your business in technical aspects. I am
                  someone who is working on his passion, there won’t be someone
                  who can understand your emotions better than me.
                </p>
              </ul>
              <div>
                <a href="" className="blog social">
                  Whatspp
                </a>
              </div>
            </div>
            <div>
              <p style={{ fontSize: "22px" }}>
                I develop custom mobile apps to meet the requirements of your
                business and drive growth. Our full-stack development service
                has you covered from design to development, to launch, and
                beyond.
              </p>
            </div>
            <div style={{ marginTop: "40px" }}>
              <p>
                &#169;2021-2022. All rights reserved by niharrout.com Changelog
                (v 4.5)
              </p>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
