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
        Senior Frontend Engineer with 7 years of experience, specializing in React and React Native. Experienced leading on and offshore teams, working with stakeholders to deliver high-value features, mentoring junior developers, designing highly performant achritecture, and pioneering advanced charting solutions. 
      </Typography>
    </Box>
  );
};

export default Bio;
