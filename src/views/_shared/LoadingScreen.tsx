import LinearProgress from "@material-ui/core/LinearProgress";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
   container: {
      "width": "100%",
      "& > * + *": {
         marginTop: theme.spacing(2),
      },
   },
}));

const LoadingScreen = (props: any) => {
   const classes = useStyles();
   return (
      <div className={classes.container}>
         <LinearProgress
         //variant="determinate"
         // value={completed}
         ></LinearProgress>
      </div>
   );
};

export default LoadingScreen;
