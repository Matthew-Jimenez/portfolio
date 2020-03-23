import React, { FC } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

interface IBioProps {}

const Bio: FC<IBioProps> = props => {
  return (
    <Box pb={4}>
      <Typography gutterBottom variant="h4">
        Bio
      </Typography>

      <Typography variant="body1">
        Frontend developer with 3 years of professional experience creating and
        optimizing react applications.
      </Typography>
    </Box>
  );
};

export default Bio;
