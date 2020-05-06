import React from "react";
import { Grid, makeStyles } from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
   parallaxContainer: {
      padding: "125px 0 125px 0",
      [theme.breakpoints.down("lg")]: {
         padding: "100px 0 100px 0",
      },
      [theme.breakpoints.down("md")]: {
         padding: "75px 0 75px 0",
      },
   },
   parallaxBrackround: {
      width: "100%",
      height: "250px",
      backgroundImage:
         "url('https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      [theme.breakpoints.down("lg")]: {
         height: "200px",
      },
      [theme.breakpoints.down("md")]: {
         height: "175px",
      },
   },
}));

const Parallax = (props: any) => {
   const classes = useStyles();

   return (
      <Grid item className={classes.parallaxContainer}>
         <div className={classes.parallaxBrackround}></div>
      </Grid>
   );
};
export default Parallax;
