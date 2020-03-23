import React, { FC } from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

interface IContactProps {}

const Contact: FC<IContactProps> = props => {
  return (
    <Box pb={4}>
      <Typography gutterBottom variant="h4">
        Contact
      </Typography>

      <Typography variant="body1">mattjimenez091@gmail.com</Typography>
      <Typography variant="body1">661-912-7742</Typography>
    </Box>
  );
};

export default Contact;
