import React, { FC } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SkillWithProgress from "./SkillWithProgress";

interface ISkillsProps {}

const Skills: FC<ISkillsProps> = props => {
  return (
    <Box pb={4}>
      <Typography gutterBottom variant="h4">
        Skills
      </Typography>

      <SkillWithProgress label="React" value={100} />

      <SkillWithProgress label="HTML" value={100} />

      <SkillWithProgress label="CSS/SASS" value={90} />

      <SkillWithProgress label="Javascript" value={80} />

      <SkillWithProgress label="Node/Express" value={60} />
    </Box>
  );
};

export default Skills;
