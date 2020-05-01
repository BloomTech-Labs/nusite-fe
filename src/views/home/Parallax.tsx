import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, makeStyles, useMediaQuery } from "@material-ui/core/";
import useTheme from "@material-ui/core/styles/useTheme";

const useStyles = makeStyles(theme => ({
   parallaxBrackroung: {
      width: "100%",
      height: "200px",
      backgroundImage:
         "url('https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
   },
}));

const Parallax = (props: any) => {
   const classes = useStyles();
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("xs"));

   return <Grid item className={classes.parallaxBrackroung}></Grid>;
};
export default Parallax;
