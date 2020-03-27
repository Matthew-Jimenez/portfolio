import React, { FunctionComponent } from "react";

import { makeStyles } from "@material-ui/core";
import withWidth, { WithWidth } from "@material-ui/core/withWidth";

const removeScrollUnit = 20;

const useStyles = makeStyles({
  root: {
    height: "100%",
    overflow: "hidden"
  },
  gridList: {
    overflowY: "hidden",
    height: `calc(100% + ${removeScrollUnit}px)`,
    overflowX: "scroll",
    width: "100%",
    whiteSpace: "nowrap",
    paddingBottom: `calc(${removeScrollUnit}px + 3px)`,
    marginBottom: -20,
    paddingTop: 3,
    paddingLeft: 3,
    WebkitOverflowScrolling: "touch",
    transform: "translateZ(0)",
    display: "flex",
    alignItems: "stretch"
  },

  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
});

interface IProps extends WithWidth {
  children?: React.ReactNode;
  id: string;
}

const SingleLineGridList: FunctionComponent<IProps> = ({
  children,
  id,
  width,
  ...otherProps
}) => {
  const classes = useStyles();

  return (
    <div {...otherProps} className={classes.root}>
      <div id={id} className={classes.gridList}>
        {children}
      </div>
    </div>
  );
};

export default withWidth()(SingleLineGridList);
