import React, { FC } from "react";

import { Box, Typography, Container } from "@material-ui/core";

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

        <Bio />

        <Skills />
      </Container>

      <Box pb={4}>
        <Container>
          <Typography gutterBottom variant="h4">
            Work History
          </Typography>
        </Container>

        <Container style={{ padding: 0 }}>
          <HorizontalList id="experience">
            <Box display="inline-block" width={8}></Box>

            {workHistory.map(item => (
              <WorkHistoryItem
                key={item.companyName}
                companyName={item.companyName}
                position={item.position}
                duration={item.duration}
                details={item.details}
              />
            ))}
          </HorizontalList>
        </Container>
      </Box>
    </Box>
  );
};

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
