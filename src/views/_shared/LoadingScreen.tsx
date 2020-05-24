import React from "react";
import { makeStyles, LinearProgress } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
   root: {
      height: 12,
   },
}));

const LoadingScreen = (props: any) => {
   const classes = useStyles();
   return (
      <div>
         <LinearProgress
            className={classes.root}
            aria-busy="true"
         ></LinearProgress>
      </div>
   );
};

export default LoadingScreen;
