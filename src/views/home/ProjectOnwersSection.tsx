import React from "react";
import {
   Grid,
   makeStyles,
   useMediaQuery,
   Typography,
   useTheme,
} from "@material-ui/core/";
import realtime2 from "../../images/reatime2.svg";
import GetStartedButton from "../_shared/buttons/GetStartedButton";
const useStyles = makeStyles(theme => ({
   image: {
      maxWidth: "100%",
   },
}));

const ProjectOwnersSection = (props: any) => {
   const classes = useStyles();
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.up("md"));

   const mobileView = "column-reverse";
   const tabletView = "row";

   return (
      <Grid item component="section">
         <Grid
            container
            direction={matches ? tabletView : mobileView}
            spacing={3}
         >
            <Grid item lg={4} md={3}>
               <img className={classes.image} src={realtime2} alt="" />
            </Grid>
            <Grid item lg={8} md={9}>
               <Typography variant="h1">Project Owners</Typography>
               <Typography variant="body1" component="p">
                  Find someone to build, fix, or add on to your existing site or
                  idea. Just create an account and start searching for qualified
                  developers in seconds. You can browse through developer
                  profiles to to see if a developer is suited for your project
                  or just let our algorithm do the heavy lifting for you and let
                  us find you the the best matches based on developer skills or
                  other preferences of your project in no time.
               </Typography>
               <Grid container justify="center">
                  <GetStartedButton />
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   );
};
export default ProjectOwnersSection;
