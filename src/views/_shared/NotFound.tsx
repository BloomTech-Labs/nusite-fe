import React from "react";
import { Typography, makeStyles } from "@material-ui/core/";
const useStyles = makeStyles(theme => ({
   container: {
      height: "1000px",
   },
   typography: {
      color: theme.palette.common.black,
      fontWeight: 500,
   },
}));

const NotFound = () => {
   const classes = useStyles();
   return (
      <div className={`main-container ${classes.container}`}>
         <Typography variant="h1" className={classes.typography}>
            404 NOT FOUND
         </Typography>
      </div>
   );
};

export default NotFound;
