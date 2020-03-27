import React, { FC } from "react";

import { Box, Typography, Container, Grid } from "@material-ui/core";

import Skills from "../components/Skills/Skills";
import Bio from "../components/Bio/Bio";
import Contact from "../components/Contact/Contact";
import HorizontalList from "../components/ui/HorizontalList";
import WorkHistoryItem from "../components/WorkHistory/WorkHistoryItem";

interface IRootProps {}

const Root: FC<IRootProps> = props => {
  return (
    <Box pt={1}>
      <Container>
        <Typography
          style={{ fontSize: "1.5rem" }}
          variant="h2"
          color="textSecondary"
        >
          Frontend Developer
        </Typography>
        <Typography color="primary" style={{ lineHeight: 1 }} variant="h1">
          Matthew Jimenez
        </Typography>

        <Contact />

        <Grid container>
          <Grid item xs={12} sm={12} md={7}>
            <Bio />
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <Skills />
          </Grid>
        </Grid>
      </Container>

      <Box pb={4}>
        <Container>
          <Typography gutterBottom variant="h4">
            Work History
          </Typography>
        </Container>

        <Container style={{ padding: 0 }}>
          <HorizontalList id="experience">
            <Box display="inline-block" mr={1} width={8}></Box>

            {workHistory.map(item => (
              <Box mr={2} key={item.companyName} minWidth={250}>
                <WorkHistoryItem
                  companyName={item.companyName}
                  position={item.position}
                  duration={item.duration}
                  details={item.details}
                />
              </Box>
            ))}
          </HorizontalList>
        </Container>
      </Box>

      <Box pb={4}>
        <Container>
          <Typography gutterBottom variant="h4">
            Projects
          </Typography>
        </Container>

        <Container style={{ padding: 0 }}>
          <HorizontalList id="experience">
            <Box display="inline-block" mr={1} width={8}></Box>

            {images.map(image => (
              <a
                style={{ display: "flex" }}
                rel="noopener noreferrer"
                target="_blank"
                key={image.alt}
                href={image.link}
              >
                <Box
                  bgcolor={image.bg}
                  borderRadius={4}
                  boxShadow="0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)"
                  marginRight={2}
                  display="flex"
                  p={2}
                  justifyContent="center"
                  alignItems="center"
                  minWidth={250}
                  maxWidth={300}
                >
                  <img
                    style={{
                      height: "auto",
                      width: "auto",
                      maxWidth: "100%"
                    }}
                    alt={image.alt}
                    src={image.url}
                  />
                </Box>
              </a>
            ))}

            <Box display="inline-block" pl={1}></Box>
          </HorizontalList>
        </Container>
      </Box>
    </Box>
  );
};

const images = [
  {
    url: "https://v.fastcdn.co/u/431cc0e7/46421045-0-OAIF-Owl.png",
    alt: "optionsai landing page",
    bg: "#fff",
    link: "https://optionsai.com"
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

const workHistory = [
  {
    companyName: "OptionsAI",
    position: "Frontend Developer",
    duration: "Mar 2019 - Feb 2020",
    details: [
      `Planned, developed, tested, and deployed multiple web
      applications created using React and TypeScript`,
      `Ensured application was highly responsive to user actions by
      optimizing functional components and complex logic`,
      `Developed a highly interactive chart using ChartJS`,
      `Worked side by side CTO regularly while communicating with
      other team members remotely via Slack.`
    ]
  },
  {
    companyName: "Tattwo",
    position: "Frontend Developer",
    duration: "Feb 2019 - Jan 2020",
    details: [
      `Worked closely with the two founders to outline and develop mvp features`,
      `Developed “like” and “comment" features using subscriptions to allow for real time updates`,
      `Integrated instgram API into the application allowing for a convinent way for tattoo artists to upload their photos onto the platform`
    ]
  },
  {
    companyName: "Vintagedig",
    position: "Sole Web Developer",
    duration: "Nov 2018 - Jan 2020",
    details: [
      `Worked one on one with founder to design and develop his application from start to finish.`,
      `Developed frontend application using React and Redux`,
      `Made use of search as a service provider, Algolia, to provide fast and relevant search results to users`
    ]
  },
  {
    companyName: "OnStack",
    position: "Software Developer Intern",
    duration: "Aug 2017 - Nov 2018",
    details: [
      `Worked as part of a small development team to create a variety of different products, ranging from landing pages to full featured applications.`
    ]
  }
];

export default Root;
