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
        <Typography
          color="primary"
          gutterBottom
          style={{ lineHeight: 1 }}
          variant="h1"
        >
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

            <WorkHistoryItem
              companyName="OptionsAI"
              position="Frontend Developer"
              duration="Mar 2019 - Feb 2020"
            />

            <WorkHistoryItem
              companyName="Tattwo"
              position="Frontend Developer"
              duration="Feb 2019 - Jan 2020"
            />

            <WorkHistoryItem
              companyName="Vintagedig"
              position="Sole Developer"
              duration="Nov 2018 - Jan 2020"
            />

            <WorkHistoryItem
              companyName="OnStack"
              position="Frontend Intern"
              duration="Aug 2017 - Nov 2018"
            />
          </HorizontalList>
        </Container>
      </Box>
    </Box>
  );
};

export default Root;
