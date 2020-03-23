import React, { FC } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

interface IWorkHistoryItemProps {
  companyName: string;
  position: string;
  duration: string;
}

const WorkHistoryItem: FC<IWorkHistoryItemProps> = ({
  companyName,
  position,
  duration
}) => {
  return (
    <Card
      elevation={3}
      style={{ width: 250, display: "inline-block", marginRight: 12 }}
    >
      <CardContent style={{ paddingBottom: 16 }}>
        <Typography color="textSecondary" variant="caption">
          company
        </Typography>
        <Typography color="primary" variant="h5" gutterBottom>
          {companyName}
        </Typography>

        <Typography color="textSecondary" variant="caption">
          position
        </Typography>
        <Typography variant="body1" gutterBottom>
          {position}
        </Typography>

        <Typography color="textSecondary" variant="caption">
          duration
        </Typography>
        <Typography variant="body1" gutterBottom>
          {duration}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WorkHistoryItem;
