import React, { FC, useMemo } from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SkillWithProgress from "./SkillWithProgress";
import Grid from "@material-ui/core/Grid";
import { withWidth, WithWidth, isWidthDown } from "@material-ui/core";

interface ISkillsProps extends WithWidth {}

const Skills: FC<ISkillsProps> = ({ width }) => {
  const spacing = useMemo(() => {
    const isMobile = isWidthDown("md", width);

    return isMobile ? 5 : 10;
  }, [width]);

  return (
    <Box pb={4}>
      <Typography gutterBottom variant="h4">
        Skills
      </Typography>

      <Grid spacing={spacing} container>
        <Grid item={true} xs={12} sm={12} md={4}>
          <Typography gutterBottom variant="h5" color="textSecondary">
            Frontend
          </Typography>

          <SkillWithProgress label="React" value={100} />

          <SkillWithProgress label="API integrations" value={100} />

          <SkillWithProgress label="CSS / SASS" value={90} />

          <SkillWithProgress label="Redux / MobX" value={85} />

          <SkillWithProgress label="React Native" value={60} />
        </Grid>

        <Grid item={true} xs={12} sm={12} md={4}>
          <Typography gutterBottom variant="h5" color="textSecondary">
            Backend
          </Typography>

          <SkillWithProgress label="REST" value={90} />

          <SkillWithProgress label="GraphQL" value={80} />

          <SkillWithProgress label="Node / Express" value={75} />

          <SkillWithProgress label="SQL" value={65} />

          <SkillWithProgress label="NoSQL" value={65} />
        </Grid>

        <Grid item={true} xs={12} sm={12} md={4}>
          <Typography gutterBottom variant="h5" color="textSecondary">
            Other
          </Typography>

          <SkillWithProgress label="Remote Teams" value={100} />

          <SkillWithProgress label="TypeScript / JS" value={90} />

          <SkillWithProgress label="VCS / GIT" value={100} />

          <SkillWithProgress label="Agile Env" value={85} />

          <SkillWithProgress label="Unit Testing" value={85} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default withWidth()(Skills);
