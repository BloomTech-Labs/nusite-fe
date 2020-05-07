import React from "react";
import { Grid, makeStyles } from "@material-ui/core/";
import Typed from "react-typed";

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
         "url('https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
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

   typingText: {
      ...theme.overrides?.MuiTypography?.h1,
      color: theme.palette.common.white,
      fontWeight: 900,
      display: "flex",
      alignContent: "center",
      justif: "center",
      paddingLeft: "20px",
      [theme.breakpoints.down("sm")]: {
         fontSize: "1.1rem",
      },
   },
}));

const Parallax = (props: any) => {
   const classes = useStyles();

   return (
      <Grid item className={classes.parallaxContainer}>
         <Grid
            container
            alignContent="center"
            className={classes.parallaxBrackround}
         >
            <Typed
               className={classes.typingText}
               strings={[
                  "I need to build a new website",
                  "I need to build a web application",
                  "I need to revamp my old website",
                  "I need a page for my buinsness",
                  "I need a personal landing page",
               ]}
               typeSpeed={40}
               backSpeed={50}
               loop={true}
            />
         </Grid>
      </Grid>
   );
};
export default Parallax;
