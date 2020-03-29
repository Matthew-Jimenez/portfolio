import React, { FC } from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

interface IBioProps {}

const Bio: FC<IBioProps> = props => {
  return (
    <Box pb={4}>
      <Typography gutterBottom variant="h4">
        About
      </Typography>

      <Typography gutterBottom={true} variant="body1">
        Experienced Frontend Developer ready to produce quality results. 3 years
        of professional work experience including small startup team
        environments and remote collaboration. Specializing in the development
        and optimization of full featured React web applications.
      </Typography>
    </Box>
  );
};

export default Bio;
