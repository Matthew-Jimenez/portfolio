import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";

interface ITitleAndPositionProps {}

const TitleAndPosition: FC<ITitleAndPositionProps> = props => {
  return (
    <>
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
    </>
  );
};

export default TitleAndPosition;
