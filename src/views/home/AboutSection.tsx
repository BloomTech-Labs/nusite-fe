import React from "react";
import { Grid, makeStyles, useMediaQuery } from "@material-ui/core/";
import useTheme from "@material-ui/core/styles/useTheme";
import developersImage from "../../images/developers.svg";

const useStyles = makeStyles(theme => ({}));

const AboutSection = (props: any) => {
   const classes = useStyles();
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("xs"));

   return (
      <Grid item>
         <main>
            <br />
            <br />
            <br />
            <p className="about">
               We are creating a marketplace for developers and project
               owners/clients to meet each other and form partnerships.
               Developers and project owners can offer their services and
               projects to one another and be matched according to their needs.
            </p>
            <img src={developersImage} alt="" className="developers" />
         </main>
      </Grid>
   );
};
export default AboutSection;
