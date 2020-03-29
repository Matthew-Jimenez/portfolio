import React, { FC } from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

interface ISkillWithProgressProps {
  value?: number;
  label?: string;
  color?: string;
}

const SkillWithProgress: FC<ISkillWithProgressProps> = ({
  value = 0,
  label = ""
}) => {
  return (
    <Box
      py={1}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="body1">{label}</Typography>

      <Box width="60%">
        <LinearProgress variant="determinate" value={value} />
      </Box>
    </Box>
  );
};

export default SkillWithProgress;
