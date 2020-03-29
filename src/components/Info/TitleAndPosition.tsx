import React, { FC } from "react";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Contact from "../Contact/Contact";

interface ITitleAndPositionProps {}

const TitleAndPosition: FC<ITitleAndPositionProps> = props => {
  return (
    <Grid container justify="space-between">
      <Grid item xs={12} sm={12} md={8}>
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
      </Grid>

      <Grid container justify="center" item={true} xs={12} sm={12} md={4}>
        <Box
          style={{
            background:
              "url('https://res.cloudinary.com/djizw1taj/image/upload/v1585523803/matthew-jimenz.png')",
            backgroundSize: "cover",
            backgroundPositionY: 6,
            backgroundRepeat: "no-repeat"
          }}
          marginBottom={2}
          borderRadius="50%"
          width={250}
          height={250}
          bgcolor="#056274"
        ></Box>
      </Grid>
    </Grid>
  );
};

export default TitleAndPosition;
