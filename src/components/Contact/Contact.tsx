import React, { FC } from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

interface IContactProps {}

const Contact: FC<IContactProps> = props => {
  return (
    <Box pb={4}>
      <Typography variant="body1">email: contact@matthewjimenez.com</Typography>
      <Typography variant="body1">phone: 661-912-7742</Typography>
    </Box>
  );
};

export default Contact;
