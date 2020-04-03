import React, { FunctionComponent, useMemo, useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core";
import withWidth, { isWidthDown, WithWidth } from "@material-ui/core/withWidth";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

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
  },
  buttons: {
    boxShadow: "0px 0px 4px -1px black",
    height: 50,
    width: 50,
    cursor: "pointer",
    backgroundColor: "#f2f2f2",
    position: "absolute",
    zIndex: 1200,
    top: "50%",
    padding: 9,
    borderRadius: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#fff"
    }
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
  const isMobile = useMemo(() => isWidthDown("md", width), [width]);

  const classes = useStyles();

  const [hasScrollLeft, setHasScrollLeft] = useState(false);

  const [hasScrollRight, setHasScrollRight] = useState(false);

  useEffect(() => {
    const inner = document.getElementById(id);

    if (inner === null) {
      return;
    }

    const parent = inner.parentElement;

    if (!parent) {
      return;
    }

    if (Math.abs(inner.scrollWidth - parent.scrollWidth) > 10) {
      setHasScrollRight(true);
    }
  }, [children, id]);

  const handleScroll = (scrollRight?: boolean) => {
    const inner = document.getElementById(id);

    if (inner === null) {
      return;
    }

    const parent = inner.parentElement;

    if (!parent) {
      return;
    }

    let i = 0;
    const myInt = setInterval(() => {
      if (i >= 50) {
        clearInterval(myInt);
        return;
      }

      if (scrollRight) {
        inner.scrollLeft = inner.scrollLeft + parent.scrollWidth / 50;
      } else {
        inner.scrollLeft = inner.scrollLeft - parent.scrollWidth / 50;
      }

      if (inner.scrollLeft === 0) {
        setHasScrollLeft(false);
      } else {
        setHasScrollLeft(true);
      }

      if (
        Math.abs(inner.scrollLeft + parent.scrollWidth - inner.scrollWidth) < 10
      ) {
        setHasScrollRight(false);
      } else {
        setHasScrollRight(true);
      }

      i++;
    }, 10);
  };

  return (
    <div {...otherProps} className={classes.root}>
      {!isMobile && (
        <>
          {hasScrollLeft && (
            <div
              className={classes.buttons}
              style={{
                left: -20
              }}
              onClick={() => handleScroll()}
            >
              <ChevronLeft />
            </div>
          )}

          {hasScrollRight && (
            <div
              className={classes.buttons}
              style={{ right: -20 }}
              onClick={() => handleScroll(true)}
            >
              <ChevronRight />
            </div>
          )}
        </>
      )}
      <div id={id} className={classes.gridList}>
        {children}
      </div>
    </div>
  );
};

export default withWidth()(SingleLineGridList);
