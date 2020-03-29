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

      <Container style={{ padding: 0 }}>
        <HorizontalList id="experience">
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
    link: "http://optionsai.com"
  },
  {
    url: "https://vintage-dig-dev.firebaseapp.com/assets/vintagedig-logo-4.png",
    alt: "vintagedig website",
    bg: "#056274",
    link: "https://vintagedig.com"
  },
  {
    url: "http://tattwo.com/img/logo.png",
    alt: "tattwo landing page",
    bg: "#9d3535",
    link: "http://tattwo.com"
  },
  {
    url:
      "https://firebasestorage.googleapis.com/v0/b/advancekern.appspot.com/o/ADVANCE-KERN-logo-white.png?alt=media&token=4e811ff5-a660-4753-8357-053fe64a6893",
    alt: "advance kern website",
    bg: "#373737",
    link: "https://advancekern.com"
  }
];

export default Projects;
