import React, { FC, useState } from "react";

import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Close from "@material-ui/icons/Close";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

interface IProjectProps {
  alt: string;
  link: string;
  bg: string;
  url: string;
  projectDescription: string;
  projectTitle: string;
}

const Project: FC<IProjectProps> = ({
  alt,
  link,
  bg,
  url,
  projectDescription,
  projectTitle
}) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box
        style={{ cursor: "pointer" }}
        bgcolor={bg}
        borderRadius={4}
        boxShadow="0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)"
        marginRight={4}
        display="flex"
        p={2}
        justifyContent="center"
        alignItems="center"
        minWidth={250}
        maxWidth={300}
        onClick={handleToggle}
      >
        <img
          style={{
            height: "auto",
            width: "auto",
            maxWidth: "100%"
          }}
          alt={alt}
          src={url}
        />
      </Box>

      <Modal style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} open={open}>
        <Box
          style={{ outline: "none", height: "100%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ClickAwayListener onClickAway={handleToggle}>
            <Card style={{ maxWidth: 400, margin: 8 }} elevation={9}>
              <CardHeader
                title={
                  <Typography variant="h4" color="primary">
                    {projectTitle}
                  </Typography>
                }
                action={
                  <Close style={{ cursor: "pointer" }} onClick={handleToggle} />
                }
              />

              <CardContent>{projectDescription}</CardContent>

              <Grid container justify="flex-end">
                <a
                  style={{ textDecoration: "none" }}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={link}
                >
                  <Button color="secondary">View Project</Button>
                </a>
              </Grid>
            </Card>
          </ClickAwayListener>
        </Box>
      </Modal>
    </>
  );
};

export default Project;
