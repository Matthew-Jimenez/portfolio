import React, { FC } from "react";

import { Box, Container, Grid } from "@material-ui/core";

import Skills from "../components/Skills/Skills";
import Bio from "../components/Bio/Bio";
import Projects from "../components/Projects/Projects";
import WorkHistory from "../components/WorkHistory/WorkHistory";
import Info from "../components/Info/TitleAndPosition";

interface IRootProps {}

const Root: FC<IRootProps> = props => {
  return (
    <Box pt={1}>
      <Container>
        <Info />

        <Grid container={true}>
          <Grid item={true} xs={12} sm={12} md={6}>
            <Bio />
          </Grid>
        </Grid>

        <Skills />
      </Container>

      <WorkHistory />

      <Projects />
    </Box>
  );
};

export default Root;
