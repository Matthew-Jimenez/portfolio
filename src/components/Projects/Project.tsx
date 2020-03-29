import React, { FC } from "react";
import Box from "@material-ui/core/Box";

interface IProjectProps {
  alt: string;
  link: string;
  bg: string;
  url: string;
}

const Project: FC<IProjectProps> = ({ alt, link, bg, url }) => {
  return (
    <a
      style={{ display: "flex" }}
      rel="noopener noreferrer"
      target="_blank"
      key={alt}
      href={link}
    >
      <Box
        bgcolor={bg}
        borderRadius={4}
        boxShadow="0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)"
        marginRight={2}
        display="flex"
        p={2}
        justifyContent="center"
        alignItems="center"
        minWidth={250}
        maxWidth={300}
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
    </a>
  );
};

export default Project;
