import React, { FC, useState } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";
import { CardHeader } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

interface IWorkHistoryItemProps {
  companyName: string;
  position: string;
  duration: string;
  details: string[];
}

const WorkHistoryItem: FC<IWorkHistoryItemProps> = ({
  companyName,
  position,
  duration,
  details
}) => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleCardSelection = () => {
    setDetailsOpen(!detailsOpen);
  };

  return (
    <>
      <Card
        onClick={handleCardSelection}
        elevation={3}
        style={{
          width: 250,
          display: "inline-block",
          marginRight: 12,
          cursor: "pointer"
        }}
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

      <Modal
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        open={detailsOpen}
      >
        <Box
          style={{ outline: "none", height: "100%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ClickAwayListener onClickAway={handleCardSelection}>
            <Card style={{ maxWidth: 400, margin: 8 }} elevation={9}>
              <CardHeader
                title={
                  <Typography variant="h4" color="primary">
                    {companyName}
                  </Typography>
                }
                subheader={position}
                action={
                  <Close
                    style={{ cursor: "pointer" }}
                    onClick={handleCardSelection}
                  />
                }
              />

              <CardContent>
                {details.map(detail => (
                  <Box key={detail} pb={2}>
                    <Typography variant="body2">{detail}</Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </ClickAwayListener>
        </Box>
      </Modal>
    </>
  );
};

export default WorkHistoryItem;
