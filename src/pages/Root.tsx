import React, { FC } from "react";

import { Box, Container, Grid } from "@material-ui/core";

import Skills from "../components/Skills/Skills";
import Bio from "../components/Bio/Bio";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";
import WorkHistory from "../components/WorkHistory/WorkHistory";
import TitleAndPosition from "../components/Title/TitleAndPosition";

interface IRootProps {}

const Root: FC<IRootProps> = props => {
  return (
    <Box pt={1}>
      <Container>
        <TitleAndPosition />

        <Contact />

        <Grid container={true}>
          <Grid item={true} xs={12} sm={12} md={7}>
            <Bio />
          </Grid>

          <Grid item={true} xs={12} sm={12} md={3}>
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
