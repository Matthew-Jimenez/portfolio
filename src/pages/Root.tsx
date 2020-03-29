import React, { FC } from "react";

import { Box, Typography, Container, Grid } from "@material-ui/core";

import Skills from "../components/Skills/Skills";
import Bio from "../components/Bio/Bio";
import Contact from "../components/Contact/Contact";
import HorizontalList from "../components/@ui/HorizontalList";
import WorkHistoryItem from "../components/WorkHistory/WorkHistoryItem";
import Projects from "../components/Projects/Projects";
import WorkHistory from "../components/WorkHistory/WorkHistory";

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

      <WorkHistory />

      <Projects />
    </Box>
  );
};

export default Root;
