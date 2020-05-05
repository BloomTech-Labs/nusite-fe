import LinearProgress from "@material-ui/core/LinearProgress";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
