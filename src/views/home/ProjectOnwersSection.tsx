import React from "react";
import { Grid, makeStyles, useMediaQuery } from "@material-ui/core/";
import useTheme from "@material-ui/core/styles/useTheme";
import realtime2 from "../../images/reatime2.svg";

const useStyles = makeStyles(theme => ({
   image: {
      maxWidth: "100px",
   },
}));

const ProjectOwnersSection = (props: any) => {
   const classes = useStyles();
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("xs"));

   return (
      <Grid item>
         <section>
            <br />
            <h2>Project Owners</h2>
            <br />
            <p>
               A marketplace for developers and project owners to meet each
               other and form partnerships. Developers and project owners can
               offer their services and projects to one another and be matched
               according to their needs.
            </p>
            <br />
            <img
               className={classes.image}
               src={realtime2}
               alt=""
               //className="realtime"
            />
            <br />
            <p>
               Find someone to build, fix, or add on to your existing site or
               idea in minutes. Just set up a profile and browse existing
               projects to get and idea of what you like, pick someone, and/or
               just let us give your best matches for your project based on
               developer skills. Take the workload off of yourself and get
               started today. It's easy.
            </p>
            <br />
            <br />
            <hr />
            <br />
         </section>
      </Grid>
   );
};
export default ProjectOwnersSection;
