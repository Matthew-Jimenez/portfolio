import React, { FC } from "react";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import HorizontalList from "../@ui/HorizontalList";
import Project from "./Project";

interface IProjectsProps {}

const Projects: FC<IProjectsProps> = () => {
  return (
    <Box pb={4}>
      <Container>
        <Typography gutterBottom variant="h4">
          Projects
        </Typography>
      </Container>

      <Container style={{ padding: 0, position: "relative" }}>
        <HorizontalList id="projects">
          <Box display="inline-block" mr={1} width={8}></Box>

          {projects.map(image => (
            <Project key={image.url} {...image} />
          ))}

          <Box display="inline-block" pl={1}></Box>
        </HorizontalList>
      </Container>
    </Box>
  );
};

const projects = [
  {
    url: "https://v.fastcdn.co/u/431cc0e7/46421045-0-OAIF-Owl.png",
    alt: "optionsai landing page",
    bg: "#fff",
    link: "http://optionsai.com",
    projectTitle: "Options AI",
    projectDescription: `Options AI is a stock option trading platform that aims to help traders get in and out of trades with quick and with confidence.`
  },
  {
    url: "https://vintage-dig-dev.firebaseapp.com/assets/vintagedig-logo-4.png",
    alt: "vintagedig website",
    bg: "#056274",
    link: "https://vintagedig.com",
    projectTitle: "Vintagedig",
    projectDescription: `Vintagedig.com is a website that allows vintage stores and individuals to post vintage or retro items for sale.`
  },
  {
    url: "http://tattwo.com/img/logo.png",
    alt: "tattwo landing page",
    bg: "#9d3535",
    link: "http://tattwo.com",
    projectTitle: "Tattwo",
    projectDescription: `Tattwo provideds a place to post and search through tattoos and tattoo artists. Users can also book appointments through the application.`
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/advancekern.appspot.com/o/ADVANCE-KERN-logo-white.png?alt=media&token=4e811ff5-a660-4753-8357-053fe64a6893",
    alt: "advance kern website",
    bg: "#373737",
    link: "https://advancekern.com",
    projectTitle: "Advance Kern",
    projectDescription: `AdvanceKern.com was developed as a means to inform large businesses of the tax benefits that they may receive for establishing themselves in Kern County.`
  },
  {
    url:
      "https://res.cloudinary.com/djizw1taj/image/upload/v1585877582/appname.png",
    alt: "appname",
    bg: "#fff",
    link: "https://auth-demo.matthewjimenez.com/",
    projectTitle: "Auth Demo App",
    projectDescription:
      "This small web app is meant to showcase handling registration and authentication in a React application. The application allows a user to sign up, log in, and store their session token. The frontend utilizes: React, TypeScript, validate.js, and Formik. The backend uses BAAS provider back4app."
  }
];

export default Projects;
