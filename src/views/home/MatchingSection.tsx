import React from "react";
import {
   Grid,
   makeStyles,
   useMediaQuery,
   Typography,
   useTheme,
} from "@material-ui/core";
import coder from "../../images/coder.svg";
import userflow from "../../images/userflow.gif";
import Market from "../../images/market.png";
const useStyles = makeStyles(theme => ({
   container: {
      padding: "0 0 125px 0",
      [theme.breakpoints.down("lg")]: {
         padding: "0 0 100px 0",
      },
      [theme.breakpoints.down("md")]: {
         padding: "0 0 75px 0",
      },
   },
   image: {
      maxWidth: "100%",
   },
   gif: {
      maxWidth: "100%",
      height: "250px",
      [theme.breakpoints.down("lg")]: {
         height: "200px",
      },
      [theme.breakpoints.down("md")]: {
         height: "175px",
      },
   },
}));

const MatchingSection = (props: any) => {
   const classes = useStyles();
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.up("md"));

   const mobileView = "row-reverse";
   const tabletView = "row";

   return (
      <Grid item component="section" className="item-container">
         <Grid container direction="column">
            <Grid
               container
               direction={matches ? mobileView : tabletView}
               spacing={3}
               className={classes.container}
            >
               <Grid item lg={8} md={9}>
                  <Typography variant="h1">Our Matching Process </Typography>
                  <Typography variant="body1" component="p">
                     PartNerd™ provides users a comprehensive recommendation
                     generation. Get Realtime matching based on advanced data
                     analysis.
                  </Typography>
               </Grid>
               <Grid item lg={4} md={3}>
                  <img className={classes.image} src={coder} alt="" />
               </Grid>
            </Grid>
            <br />
            <img className={classes.gif} src={userflow} alt="" />
            {/* <h2>Our marketplace</h2> */}
            <br />
            <br />
            <br />
            <img src={Market} className="market" alt="market" />
         </Grid>
      </Grid>
   );
};
export default MatchingSection;
